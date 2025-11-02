import HeadMeta from '@/components/HeadMeta'
import PageHeader from '@/components/PageHeader'
import ContactDetails from '@/components/ContactDetails'
import InquiryForm from '@/components/InquiryForm'

export default function Contact() {
  return (
    <>
      <HeadMeta
        title="Contact Us - Sailahari"
        description="Get in touch with Sailahari. Send us an inquiry or reach out via email, phone, or visit our office."
      />
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />
      
      <div className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactDetails />
            <InquiryForm />
          </div>
        </div>
      </div>
    </>
  )
}

