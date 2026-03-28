import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact BudgetDev | Get a Free Software Solution Quote',
  description: 'Ready to build your next big thing? Contact BudgetDev for affordable software and mobile app development in Andhra Pradesh. Get a free technical draft today.',
  keywords: 'contact software developer india, get software quote india, mobile app development inquiry, vizianagaram tech support, hire software engineer andhra pradesh',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
