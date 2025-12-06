import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  clientName: string;
}

interface PaymentDetails {
  method: string;
  transactionId: string;
  phoneNumber: string;
  deliveryAddress: string;
  deliveryLocation: "inside" | "outside";
}

interface OrderData {
  cartItems: CartItem[];
  paymentDetails: PaymentDetails;
  subtotal: number;
  deliveryCharge: number;
  total: number;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const orderData: OrderData = await request.json();
    const { cartItems, paymentDetails, subtotal, deliveryCharge, total } = orderData;

    // Validation
    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    if (!paymentDetails) {
      return NextResponse.json(
        { error: 'Payment details are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Generate payment method name
    const getPaymentMethodName = (method: string) => {
      const methods: { [key: string]: string } = {
        bkash: "bKash",
        nagad: "Nagad",
        upay: "Upay",
        rocket: "Rocket",
      };
      return methods[method] || method;
    };

    // Generate products HTML
    const productsHTML = cartItems.map(item => `
            <tr>
                <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">
                    <div style="display: flex; align-items: center;">
                        <div>
                            <strong style="color: #333; font-size: 16px;">${item.title}</strong><br/>
                            <span style="color: #777; font-size: 14px;">${item.clientName}</span>
                        </div>
                    </div>
                </td>
                <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; text-align: center; color: #555;">
                    ${item.quantity}
                </td>
                <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; text-align: right; color: #555;">
                    ৳${item.price.toFixed(2)}
                </td>
                <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; text-align: right; color: #333; font-weight: bold;">
                    ৳${(item.price * item.quantity).toFixed(2)}
                </td>
            </tr>
        `).join('');

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Order - Transaction ID: ${paymentDetails.transactionId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #ea580c; margin-bottom: 10px; border-bottom: 3px solid #ea580c; padding-bottom: 15px;">
              🛒 New Order Received
            </h1>

            <!-- Order Summary -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #333; margin-bottom: 15px; font-size: 20px;">Order Details</h2>
              <table style="width: 100%; border-collapse: collapse; background-color: #fff;">
                <thead>
                  <tr style="background-color: #f4f4f4;">
                    <th style="padding: 12px; text-align: left; color: #333; font-weight: bold; border-bottom: 2px solid #ea580c;">Product</th>
                    <th style="padding: 12px; text-align: center; color: #333; font-weight: bold; border-bottom: 2px solid #ea580c;">Qty</th>
                    <th style="padding: 12px; text-align: right; color: #333; font-weight: bold; border-bottom: 2px solid #ea580c;">Price</th>
                    <th style="padding: 12px; text-align: right; color: #333; font-weight: bold; border-bottom: 2px solid #ea580c;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${productsHTML}
                </tbody>
              </table>
            </div>

            <!-- Price Summary -->
            <div style="margin-bottom: 30px; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
              <h3 style="color: #333; margin-bottom: 15px; font-size: 18px;">Price Summary</h3>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e0e0e0;">
                <span style="color: #555;">Subtotal (${cartItems.length} items):</span>
                <span style="color: #555; font-weight: bold;">৳${subtotal.toFixed(2)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e0e0e0;">
                <span style="color: #555;">Delivery Charge (${paymentDetails.deliveryLocation === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka'}):</span>
                <span style="color: #555; font-weight: bold;">৳${deliveryCharge.toFixed(2)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 15px 0 0 0; margin-top: 10px; border-top: 2px solid #ea580c;">
                <span style="color: #333; font-size: 20px; font-weight: bold;">Total:</span>
                <span style="color: #ea580c; font-size: 24px; font-weight: bold;">৳${total.toFixed(2)}</span>
              </div>
            </div>

            <!-- Payment Information -->
            <div style="margin-bottom: 30px;">
              <h3 style="color: #333; margin-bottom: 15px; font-size: 18px;">Payment Information</h3>
              <table style="width: 100%; background-color: #f9f9f9; border-radius: 8px; padding: 15px;">
                <tr>
                  <td style="padding: 8px; color: #555; font-weight: bold; width: 40%;">Payment Method:</td>
                  <td style="padding: 8px; color: #333;">${getPaymentMethodName(paymentDetails.method)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; color: #555; font-weight: bold;">Transaction ID:</td>
                  <td style="padding: 8px; color: #333; font-family: monospace; font-weight: bold; color: #ea580c;">${paymentDetails.transactionId}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; color: #555; font-weight: bold;">Phone Number:</td>
                  <td style="padding: 8px; color: #333;"><a href="tel:${paymentDetails.phoneNumber}" style="color: #ea580c; text-decoration: none;">${paymentDetails.phoneNumber}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px; color: #555; font-weight: bold;">Payment Status:</td>
                  <td style="padding: 8px; color: #f59e0b; font-weight: bold;">⏳ Pending Verification</td>
                </tr>
              </table>
            </div>

            <!-- Delivery Information -->
            <div style="margin-bottom: 30px;">
              <h3 style="color: #333; margin-bottom: 15px; font-size: 18px;">Delivery Information</h3>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 3px solid #ea580c;">
                <p style="margin: 0 0 8px 0; color: #555; font-weight: bold;">Delivery Address:</p>
                <p style="margin: 0; color: #333; font-size: 16px;">${paymentDetails.deliveryAddress}</p>
                <p style="margin: 10px 0 0 0; color: #777; font-size: 14px;">
                  📍 ${paymentDetails.deliveryLocation === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka'}
                </p>
              </div>
            </div>

            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">

            <p style="color: #999; font-size: 12px; margin: 0; text-align: center;">
              This order was placed from Red Monkey Web Store
            </p>
          </div>
        </div>
      `,
      text: `
New Order Received

ORDER DETAILS
${cartItems.map(item => `
- ${item.title} (${item.clientName})
  Quantity: ${item.quantity}
  Price: ৳${item.price.toFixed(2)}
  Total: ৳${(item.price * item.quantity).toFixed(2)}
`).join('')}

PRICE SUMMARY
Subtotal (${cartItems.length} items): ৳${subtotal.toFixed(2)}
Delivery Charge (${paymentDetails.deliveryLocation === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka'}): ৳${deliveryCharge.toFixed(2)}
Total: ৳${total.toFixed(2)}

PAYMENT INFORMATION
Payment Method: ${getPaymentMethodName(paymentDetails.method)}
Transaction ID: ${paymentDetails.transactionId}
Phone Number: ${paymentDetails.phoneNumber}
Payment Status: Pending Verification

DELIVERY INFORMATION
Delivery Address: ${paymentDetails.deliveryAddress}
Location: ${paymentDetails.deliveryLocation === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka'}

---
This order was placed from Red Monkey Web Store
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Order email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending order email:', error);
    return NextResponse.json(
      { error: 'Failed to send order email. Please try again later.' },
      { status: 500 }
    );
  }
}
