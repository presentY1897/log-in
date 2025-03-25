interface LogInTemplateProps {
  titleText: string;
  innerContent: React.ReactNode;
}

export default function LogInTemplate({
  titleText,
  innerContent,
}: LogInTemplateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background gap-5">
      <div className="text-4xl font-bold text-primary">{titleText}</div>
      {innerContent}
    </div>
  );
}
