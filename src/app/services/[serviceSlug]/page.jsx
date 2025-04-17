import React from 'react';
import { ServiceDetailsContent } from '@/common/constant/ServiceDetails';
import ServiceDetailPage from '@/common/module/Service/component/ServiceDetailPage';
import { notFound } from 'next/navigation';

// Generate static paths for each service slug at build time
export async function generateStaticParams() {
  return ServiceDetailsContent.map((service) => ({
    serviceSlug: service.slug,
  }));
}

// Generate dynamic metadata for the page
export async function generateMetadata({ params }) {
  const service = ServiceDetailsContent.find(s => s.slug === params.serviceSlug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    }
  }

  return {
    title: service.pageTitle, // Use specific title from data
    description: service.pageDescription, // Use specific description
  };
}

// The actual page component
const ServiceDetail = ({ params }) => {
  const { serviceSlug } = params;
  const serviceData = ServiceDetailsContent.find(s => s.slug === serviceSlug);

  // If service data not found for the slug, show 404
  if (!serviceData) {
    notFound();
  }

  return (
    <div className='mt-20 flex justify-center'>
      <ServiceDetailPage serviceData={serviceData} />
    </div>
  );
};

export default ServiceDetail; 