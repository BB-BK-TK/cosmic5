import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-5 text-center">
      <h1 className="text-2xl font-light text-text-primary mb-2">페이지를 찾을 수 없어요</h1>
      <p className="text-text-muted text-sm mb-6">
        요청하신 주소가 없거나 이동했을 수 있습니다.
      </p>
      <Link
        href="/"
        className="text-text-secondary hover:text-text-primary underline underline-offset-2 transition-colors"
      >
        Cosmic 五 홈으로 돌아가기
      </Link>
    </div>
  );
}
