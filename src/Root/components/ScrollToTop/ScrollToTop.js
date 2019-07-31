import { useEffect } from 'react';

import { useRouter } from 'common/hooks';

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.location.pathname]);

  return null;
};

export default ScrollToTop;
