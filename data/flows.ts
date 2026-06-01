import type { FlowChart } from "./types";
import { preopFlow } from "./flows/preop";
import { sickdayFlow } from "./flows/sickday";
import { npoFlow } from "./flows/npo";
import { periopFlow } from "./flows/periop";
import { compareFlow } from "./flows/compare";
import { renalFlow } from "./flows/renal";
import { injectionFlow } from "./flows/injection";
import { steroidFlow } from "./flows/steroid";
import { tubeFlow } from "./flows/tube";
import { elderlyFlow } from "./flows/elderly";
import { patientEduFlow } from "./flows/patient-edu";
import { interactionFlow } from "./flows/interaction";

export const flows: FlowChart[] = [
  // 急性期対応
  preopFlow,
  sickdayFlow,
  npoFlow,
  periopFlow,
  // 薬剤知識
  compareFlow,
  renalFlow,
  injectionFlow,
  // 特殊状況
  steroidFlow,
  tubeFlow,
  elderlyFlow,
  // 患者対応
  patientEduFlow,
  interactionFlow,
];

export function getFlowById(id: string): FlowChart | undefined {
  return flows.find((f) => f.id === id);
}
