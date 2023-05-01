declare module 'react-responsive-masonry' {
    import * as React from 'react';
  
    export const ResponsiveMasonry: React.ComponentType<{
      columnsCountBreakPoints?: Record<string, number>;
      gutter?: string;
      children: React.ReactNode;
    }>;
  
    export const Masonry: React.ComponentType<{
      gutter?: string;
      columnsCount?: number;
      children: React.ReactNode;
    }>;
  
    export default Masonry;
  }
  