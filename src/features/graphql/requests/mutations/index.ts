import { TOKEN_AUTH, REFRESH_TOKEN } from "@gql/requests/mutations/AuthMutations";
import {
  CREATE_UPDATE_PODCAST,
  CREATE_UPDATE_POST,
  DELETE_POST,
  UPDATE_PROFILE }
from "@gql/requests/mutations/AdminMutations";
import {
  INCREASE_POST_VIEW_COUNT,
  INCREASE_PODCAST_LISTENS
} from "@gql/requests/mutations/ClientMutation";

export {
  TOKEN_AUTH,
  REFRESH_TOKEN,
  CREATE_UPDATE_PODCAST,
  CREATE_UPDATE_POST,
  DELETE_POST,
  UPDATE_PROFILE,
  INCREASE_POST_VIEW_COUNT,
  INCREASE_PODCAST_LISTENS
};
