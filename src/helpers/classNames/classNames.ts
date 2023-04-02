
// ключ = string, значение = boolean | string
// привычный объект с ограниченным количеством значений
// const obj: Mods = {
//   'asds': 'sdads',
//   'sdasd': true,
// }
type Mods = Record<string, boolean | string>


export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([classNames]) => classNames)
  ]
    .join(' ');
};

// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
// Должна получится строка ->
// 'remove-btn hovered selectable red pdg'