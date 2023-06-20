import React from 'react';

function ListItem({ getItemProps, item, index, selectedItem, highlightedIndex, ...props }: any) {
  const isSelected = selectedItem?.id === item.id;
  const isHighlighted = highlightedIndex === index;
  return (
    <li
      {...getItemProps({
        index,
        item,
        style: {
          fontWeight: isSelected ? 'bold' : 'normal',
          backgroundColor: isHighlighted ? 'lightgray' : 'inherit',
        },
        ...props,
      })}
    />
  );
}

const SfListItem = React.memo(ListItem, (prevProps, nextProps) => {
  // true means do NOT rerender
  // false means DO rerender

  // these ones are easy if any of these changed, we should re-render
  if (prevProps.getItemProps !== nextProps.getItemProps) return false;
  if (prevProps.item !== nextProps.item) return false;
  if (prevProps.index !== nextProps.index) return false;
  if (prevProps.selectedItem !== nextProps.selectedItem) return false;

  // this is trickier. We should only re-render if this list item:
  // 1. was highlighted before and now it's not
  // 2. was not highlighted before and now it is
  if (prevProps.highlightedIndex !== nextProps.highlightedIndex) {
    const wasPrevHighlighted = prevProps.highlightedIndex === prevProps.index;
    const isNowHighlighted = nextProps.highlightedIndex === nextProps.index;
    return wasPrevHighlighted === isNowHighlighted;
  }
  return true;
});

function Menu({ items, getMenuProps, getItemProps, highlightedIndex, selectedItem }: any) {
  return (
    <ul {...getMenuProps()}>
      {items.map((item: any, index: any) => (
        <SfListItem
          key={item.id}
          getItemProps={getItemProps}
          item={item}
          index={index}
          selectedItem={selectedItem}
          highlightedIndex={highlightedIndex}>
          {item.name}
        </SfListItem>
      ))}
    </ul>
  );
}

const SfMenu = React.memo(Menu);
export default SfMenu;
