import { sendDataResponse, sendMessageResponse } from "../utils/responses.js";
import {
  findWineById,
  fullSearch,
  withVarietalsSearch,
  middleSearch,
  limitedSearch,
  basicSearch,
  semiBasicSearch,
} from "../domain/wine.js";

export const findWine = async (req, res) => {

  //get list of wines matching criteria, reducing criteria as you go until there is a match
  try {
    let search = await fullSearch(req);

    if (search.length === 0) {
      search = await withVarietalsSearch(req);
    }

    if (search.length === 0) {
      search = await middleSearch(req);
    }

    if (search.length === 0) {
      search = await limitedSearch(req);
    }

    if (search.length === 0) {
      search = await semiBasicSearch(req);
    }

    if (search.length === 0) {
      search = await basicSearch(req);
    }

      //filter results again through chosen characteristics
    const filteredSearch = search.filter(wine => {
      for(let character of req.body.characteristics) {
        if(wine.characteristics.includes(character)) {
          return true
        }
      }
      return false
    })

    if(filteredSearch.length !== 0) {
      search = filteredSearch
    }

    //check for particular ids and set wine to push certain bottles
    let wine


    // for(const searchWine of search) {
    //   if(searchWine.id === 13 || searchWine.id === 14) {
    //     wine = searchWine
    //   }
    // }

    if(!wine) {
      const maxRandom = search.length;
      const randomWine = Math.floor(Math.random() * maxRandom)
      wine = search[randomWine];
    }     

    if (!wine) {
        return sendMessageResponse(res, 400, "wine does not exist in db");
    }

      return sendDataResponse(res, 201, wine);
    }
   catch (error) {
     console.log(error)
    return sendMessageResponse(res, 500, "Server Error");
  }
};
