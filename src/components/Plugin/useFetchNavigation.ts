import { useEffect, useState } from 'react';
import { Group } from "../../types/Navigation";

export const useFetchNavigation = (navigationUrl: string) => {
  const [ navigation, setNavigation ] = useState<Group[] | undefined>();

  useEffect(() => {
    fetch(navigationUrl).then(response => {
      if(!response.ok) throw Error("Could not fetch navigation");
      else response.json().then(json  => setNavigation(json as Group[]));
    })

  }, [ navigationUrl ]);

  return navigation;
}
