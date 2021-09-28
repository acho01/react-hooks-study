let oldDependencies = [];
let orderIndex = 0;
export const useEffect = (callback, dependencies) => {
  let hasChanged = true;
  if (oldDependencies) {
    hasChanged = oldDependencies.some(
      (d, index) => !Object.is(d, oldDependencies[index])
    );
  }

  if (hasChanged) {
    callback();
  }

  oldDependencies[orderIndex] = dependencies;
  orderIndex++;
};
