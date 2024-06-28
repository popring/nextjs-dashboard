import Form from '@/app/tutorial/ui/invoices/create-form';
import Breadcrumbs from '@/app/tutorial/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/tutorial/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/tutorial/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/tutorial/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}