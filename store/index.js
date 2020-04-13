import create from 'zustand';

export const [useStore] = create((set, get) => ({
  count: 0,
  countPlusOne: () => {
    const { count } = get();
    return set(() => ({ count: count + 1 }));
  },
}));
