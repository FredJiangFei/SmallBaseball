export function SfMenu({ items, getMenuProps, getItemProps, highlightedIndex, selectedItem }: any) {
  return (
    <ul {...getMenuProps()}>
      {items.map((item: any, index: any) => (
        <ListItem
          key={item.id}
          getItemProps={getItemProps}
          item={item}
          index={index}
          selectedItem={selectedItem}
          highlightedIndex={highlightedIndex}>
          {item.name}
        </ListItem>
      ))}
    </ul>
  );
}

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
