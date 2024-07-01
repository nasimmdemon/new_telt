import LayoutOne from "@/components/Layout/LayoutOne";
import LayoutBlogGrid from "@/components/Blog/LayoutBlogGrid";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import OutstandingBlog from "@/components/HeadingSubpage/OutstandingBlog";
import dataBlog from "@/data/blog/data.json";

export default function BlogGrid() {
  const data = dataBlog[0];

  return (
    <LayoutOne title="Blog Grid">
      <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
      <HeadingSubpage
        classname={"lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-12 pb-8"}
        title={"Senaste nyheterna"}
        desc={"Läs om hur vi arbetar och intressanta nycklar inom IT"}
      />
      <OutstandingBlog data={data} />
      <LayoutBlogGrid layout={"style-grid"} type={"style-two"} pageLimit={10} />
    </LayoutOne>
  );
}
