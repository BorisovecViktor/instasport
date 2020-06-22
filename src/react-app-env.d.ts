interface Product {
  logo: string;
  title_short: string;
  title: string; 
  activity: [
    {
      slug: string;
      title: string;
    }
  ]
  link: string; 
  city: {
    slug: string; 
    title: string; 
  };
}
