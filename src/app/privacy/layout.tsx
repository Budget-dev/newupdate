import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The BudgetDev Software Solutions',
  description: 'Learn how BudgetDev handles your data. Our privacy policy outlines how we collect and protect your information when you request a software quote or roadmap.',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
