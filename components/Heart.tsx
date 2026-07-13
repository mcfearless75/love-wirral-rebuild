export default function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21s-7.5-4.9-10-9.3C.4 8.7 2 5 5.6 5c2 0 3.4 1.1 4.4 2.6L12 10l2-2.4C15 6.1 16.4 5 18.4 5 22 5 23.6 8.7 22 11.7 19.5 16.1 12 21 12 21z" />
    </svg>
  );
}
