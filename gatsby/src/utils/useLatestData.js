import { useState, useEffect } from 'react';

const gql = String.raw;
const deets = gql`
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  // hot slices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [slicemasters, setSlicemasters] = useState();
  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql` 
                query {
                    StoreSettings (id: "downtown") {
                     name
                     slicemasters {
                       ${deets}
                     }
                     hotSlices {
                      ${deets}
                     }
                    }
                   }
                   `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemasters);
        console.log(res.data.StoreSettings.hotSlices.name);
      });
  }, []);
  return {
    hotSlices,
    slicemasters,
  };
}
