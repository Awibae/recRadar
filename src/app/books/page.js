"use client";
import NavBarComponent from "@/app/components/navbar/NavBarComponent";
import CarouselComponent from "@/app/components/carousel/CarouselComponent";
import FooterComponent from "@/app/components/footer/FooterComponent";
import { useRouter } from "next/navigation";

export default function MyListPage() {
    let newTrendingCarouselBook = ["Frankenstein", "The Lord of the Rings", "The Great Gatsby", "To Kill a Mockingbird", "1984", "Moby-Dick", "Pride and Prejudice"];
    let topRecommendedCarouselBook = ["The Hobbit", "Pride and Prejudice", "1984", "Moby-Dick", "The Catcher in the Rye", "The Great Gatsby", "To Kill a Mockingbird"];
    let awardWinningCarouselBook = ["To Kill a Mockingbird", "Pride and Prejudice", "The Hobbit", "Moby-Dick", "1984", "The Great Gatsby", "The Lord of the Rings", "The Catcher in the Rye"];
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const query = new URLSearchParams({
          query: e.target.elements.filmSearchBox.value,
        }).toString();
    
        router.push(`/search?${query}`);
      };

  return (
    <>
      <NavBarComponent />
      <div className="gradient-background" style={{ position: "fixed", top: 0, left: 0, width: "100vw", zIndex: -1000 }}></div>
      <div className="blank-background" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div className="container-fluid pt-5 flex-grow-1" style={{ overflowX: "hidden", padding: 0 }}>

            <h2 style={{ fontWeight: 700, fontSize: 50, textAlign: "center", marginTop: "60px"}}>Books</h2>

            <div className="container-fluid" style={{ overflowX: "hidden", padding: 0 }}>
                        <div className="row d-flex justify-content-center" style={{ marginTop: "5%" }}>
                            <div className="col-6 d-flex flex-column justify-content-center">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    id="filmSearchBox"
                                    placeholder="Search for movie, genre, actor..."
                                    className="form-control searchbox py-4"
                                    style={{ fontWeight: 400, fontSize: 24, borderRadius: 10 }}
                                />
                            </form>
                            </div>
                        </div>
            </div>
        

        <div className="pt-4" style={{ paddingBottom: 50, marginTop: "30px" }}>
          <h2 style={{ fontWeight: 700, fontSize: 48, textAlign: "center" }}>New and Trending</h2>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <CarouselComponent mediaNames={newTrendingCarouselBook} />
          </div>
        </div>

        <div className="pt-4" style={{ paddingBottom: 50, marginTop: "30px" }}>
          <h2 style={{ fontWeight: 700, fontSize: 48, textAlign: "center" }}>Top Recommended</h2>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <CarouselComponent mediaNames={topRecommendedCarouselBook} />
          </div>
        </div>

        <div className="pt-4" style={{ paddingBottom: 50, marginTop: "30px" }}>
          <h2 style={{ fontWeight: 700, fontSize: 48, textAlign: "center" }}>Award Winning</h2>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <CarouselComponent mediaNames={awardWinningCarouselBook} />
          </div>
        </div>

        </div>
        <FooterComponent />
      </div>
    </>
  );
}
