import Card from '@/components/common/Card'  // أو المسار النسبي الصحيح حسب مشروعك

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-6 p-4 bg-gray-100">
      <Card title="Card 1" content="This is the content of card one." />
      <Card title="Card 2" content="This is some different content for card two." />
      <Card title="Card 3" content="Here is yet another card with unique content." />
    </main>
  )
}
