interface Props {
  metaPagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
}

function usePaginations({ metaPagination }: Props) {
  const { totalPages, currentPage } = metaPagination;

  let startCount;
  let endCount;
  if (currentPage - 3 < 1) {
    startCount = 1;
    if (totalPages <= 7) {
      endCount = totalPages;
    } else {
      endCount = 7;
    }
  } else {
    startCount = currentPage - 3;
    endCount = currentPage + 3;
    if (endCount > totalPages) {
      endCount = totalPages;
      startCount = totalPages - 6;
      if (startCount < 1) {
        startCount = 1;
      }
    }
  }

  const pages = [];
  for (let i = startCount; i <= endCount; i++) {
    pages.push(i);
  }

  return {
    currentPage,
    totalPages,
    pages,
  };
}

export default usePaginations;
