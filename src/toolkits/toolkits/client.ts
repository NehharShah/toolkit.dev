import type { ClientToolkit } from "../types";
import {
  Toolkits,
  type ServerToolkitNames,
  type ServerToolkitParameters,
} from "./shared";

import { exaClientToolkit } from "./exa/client";
import { imageClientToolkit } from "./image/client";
import { githubClientToolkit } from "./github/client";
import { googleCalendarClientToolkit } from "./google-calendar/client";
import { googleDriveClientToolkit } from "./google-drive/client";
import { mem0ClientToolkit } from "./mem0/client";
import { notionClientToolkit } from "./notion/client";
import { e2bClientToolkit } from "./e2b/client";
import { stravaClientToolkit } from "./strava/client";
import { spotifyClientToolkit } from "./spotify/client";
import { etsyClientToolkit } from "./Etsy/client";

export type ClientToolkits = {
  [K in Toolkits]: ClientToolkit<
    ServerToolkitNames[K],
    ServerToolkitParameters[K]
  >;
};

export const clientToolkits: ClientToolkits = {
  [Toolkits.E2B]: e2bClientToolkit,
  [Toolkits.Memory]: mem0ClientToolkit,
  [Toolkits.Image]: imageClientToolkit,
  [Toolkits.Exa]: exaClientToolkit,
  [Toolkits.Github]: githubClientToolkit,
  [Toolkits.GoogleCalendar]: googleCalendarClientToolkit,
  [Toolkits.Notion]: notionClientToolkit,
  [Toolkits.GoogleDrive]: googleDriveClientToolkit,
  [Toolkits.Strava]: stravaClientToolkit,
  [Toolkits.Spotify]: spotifyClientToolkit,
  [Toolkits.Etsy]: etsyClientToolkit,
};

export function getClientToolkit<T extends Toolkits>(
  server: T,
): ClientToolkit<ServerToolkitNames[T], ServerToolkitParameters[T]> {
  return clientToolkits[server];
}
