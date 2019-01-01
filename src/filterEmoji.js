import emojis from "./emojiList.json";
import _ from "lodash";

export default function filterEmoji(searchText, maxResults) {
    return _.filter(emojis, (emoji) => {
        if (_.includes(emoji.title,searchText)) {
            return true;
          }
          if (_.includes(emoji.keywords,searchText)) {
            return true;
          }
          return false;
    }).slice(0,maxResults);
  }