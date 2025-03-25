interface LogInTemplateProps {
  titleText: string;
  innerContent: React.ReactNode;
}

export default function LogInTemplate({
  titleText,
  innerContent,
}: LogInTemplateProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center justify-center gap-5 p-7 rounded-lg border-2 border-primary">
        <div className="text-4xl font-bold text-primary">{titleText}</div>
        {innerContent}
      </div>
    </div>
  );
}
