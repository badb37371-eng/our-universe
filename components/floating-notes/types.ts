export type NoteVariant = "glass" | "rose" | "midnight";

export interface LoveNote {
  id: number;
  message: string;
  emoji: string;
  variant: NoteVariant;
  rotation: number;
  floatDuration: number;
  delay: number;
}