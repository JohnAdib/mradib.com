import { NextResponse } from "next/server";
import { getAllActionVerbs } from "./get-all-action-verbs";

export const dynamic = "force-static";

export const GET = async () => {
  const response = NextResponse.json(getAllActionVerbs());

  return response;
};
