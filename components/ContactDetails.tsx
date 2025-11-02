export default function ContactDetails() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-primary-600">Get in Touch</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
          <a href="mailto:info@sailahari.com" className="text-gray-700 hover:text-primary-600 transition-colors">
            info@sailahari.com
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
          <a href="tel:+1234567890" className="text-gray-700 hover:text-primary-600 transition-colors">
            +1 (234) 567-8900
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
          <address className="not-italic text-gray-700">
            123 Business Street<br />
            City, State 12345<br />
            United States
          </address>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
          <p className="text-gray-700">
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday: 10:00 AM - 4:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  )
}

