import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function ItemGrid({ item }) {
  return (
    <ItemsGrid>
      {item.map((items) => (
        <ItemStyles>
          <p>
            <span className="mark">{items.name}</span>
          </p>
          <img
            width="500"
            height="400"
            src={`${items.image.asset.url}?w=500&h=400&fit=crop`}
            alt={items.name}
            style={{
              background: `url(${items.image.asset.metadata.lqip})`,
              backgroundSize: 'cover'
            }}
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}
