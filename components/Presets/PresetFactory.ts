import { CppPass } from "./CppPass";
import { CppPattern } from "./CppPattern";
import { MlirOpt } from "./MlirOpt";
import { PlaygroundPreset } from "./PlaygroundPreset";
import { ToyChapter } from "./ToyChapter";

const PresetFactory: Record<string, () => PlaygroundPreset> = {
  "Custom mlir-opt": () => {
    return new MlirOpt();
  },
  "C++ Pass": () => {
    return new CppPass();
  },
  "C++ Pattern": () => {
    return new CppPattern();
  },
  "Toy Chapter 1": () => {
    return new ToyChapter(1);
  },
  "Toy Chapter 2": () => {
    return new ToyChapter(2);
  },
  "Toy Chapter 3": () => {
    return new ToyChapter(3);
  },
  "Toy Chapter 4": () => {
    return new ToyChapter(4);
  },
  "Toy Chapter 5": () => {
    return new ToyChapter(5);
  },
  "Toy Chapter 6": () => {
    return new ToyChapter(6);
  },
  "Toy Chapter 7": () => {
    return new ToyChapter(7);
  },
};

let PresetStorage: Record<string, PlaygroundPreset> = {};

type presetOption = keyof typeof PresetFactory;

export const defaultPreset: presetOption = "Custom mlir-opt";

export function getPresetNames() {
  return Object.keys(PresetFactory);
}

export function getPreset(name: string) {
  if (!(name in PresetStorage)) {
    PresetStorage[name] = PresetFactory[name]();
  }
  return PresetStorage[name];
}
