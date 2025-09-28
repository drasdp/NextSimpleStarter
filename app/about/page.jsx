import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">간단한 투두리스트 앱입니다!</h1>
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}