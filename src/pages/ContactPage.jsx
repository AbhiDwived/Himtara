function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-3">
            <p><strong>Phone:</strong> +91 123-456-7890</p>
            <p><strong>Email:</strong> support@himtara.com</p>
            <p><strong>Address:</strong> Himtara Water Processing Unit, Industrial Area, Gurugram</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
          <div className="space-y-2">
            <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
            <p>Sunday: 10:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;