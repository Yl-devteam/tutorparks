type BrandNameProps = {
  className?: string;
  tutorClassName: string;
};

export function BrandName({ className, tutorClassName }: BrandNameProps) {
  return (
    <span aria-label="TutorParks" className={className}>
      <span className={tutorClassName}>Tutor</span>
      <span className="text-secondary">Parks</span>
    </span>
  );
}
