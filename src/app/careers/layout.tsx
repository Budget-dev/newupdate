import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at BudgetDev | Join Our Software Solutions Team',
  description: 'Looking for UI/UX or Software Engineering roles? Join the BudgetDev team in Vizianagaram and help us build the future of Indian startups.',
  keywords: 'careers vizianagaram, join software team india, ui ux designer job india, remote jobs andhra pradesh, work at budgetdev',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
