import {
  DifficultySelector,
  DescriptionTextarea,
  QuestExperience,
  QuestTitle,
  DeleteButton,
} from "./quest-card";
import type { QuestCardProps } from "../canva.type";

export const QuestCard = ({
  data,
  onDelete,
  sourceHandle,
  targetHandle,
}: QuestCardProps) => {
  return (
    <>
      {sourceHandle}
      {targetHandle}
      <svg
        viewBox="0 0 400 600"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="none"
      >
        <path
          d="M20,0 H380 C390,0 400,10 400,20 V580 C400,590 390,600 380,600 H20 C10,600 0,590 0,580 V20 C0,10 10,0 20,0 Z
                   M40,40 H360 V560 H40 Z"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="8"
        />
      </svg>
      <DeleteButton onDelete={onDelete} />
      <QuestTitle
        title={data.title}
        onChange={(value) => data.onUpdate?.("title", value)}
      />
      <QuestExperience xp={data.xp} />
      <DifficultySelector
        value={data.difficulty}
        onChange={(value) => data.onUpdate?.("difficulty", value)}
      />
      <DescriptionTextarea
        description={data.description}
        onChange={(value) => data.onUpdate?.("description", value)}
      />
    </>
  );
};
