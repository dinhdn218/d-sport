import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, MapPin, ShoppingBag, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-0 py-8 w-full">
      <div className="mb-8">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden mb-16">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Badminton players in action"
          width={1200}
          height={500}
          className="object-cover w-full h-[300px] md:h-[400px]"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Our Badminton Shop
          </h1>
          <p className="text-white/90 max-w-2xl text-lg">
            Passionate about badminton since 2005, providing quality equipment
            and expert advice to players of all levels.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              Founded in 2005 by former national badminton player Minh Nguyen,
              our shop began as a small store with a big dream: to make quality
              badminton equipment accessible to players of all levels.
            </p>
            <p className="mb-4">
              What started as a passion project quickly grew into a trusted
              destination for badminton enthusiasts. Over the years, we&apos;ve
              expanded our inventory, opened multiple locations, and built a
              community of players who share our love for the sport.
            </p>
            <p>
              Today, we&apos;re proud to be one of the leading badminton
              specialty shops in the country, offering a carefully curated
              selection of rackets, shuttlecocks, footwear, apparel, and
              accessories from top brands around the world.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Our store in 2005"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
              Our first store, opened in 2005
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Mission & Values</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <div className="bg-primary h-2" />
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p>
                To inspire and support badminton players at every stage of their
                journey by providing exceptional products, expert advice, and a
                welcoming community that celebrates the sport we love.
              </p>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <Award className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Quality</h4>
                <p className="text-sm text-muted-foreground">
                  We carefully select and test every product we sell to ensure
                  it meets our high standards.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Community</h4>
                <p className="text-sm text-muted-foreground">
                  We foster a welcoming environment for players of all levels to
                  connect, learn, and grow together.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <ShoppingBag className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold">Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  Our team of badminton enthusiasts provides knowledgeable
                  advice to help you make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <p className="mb-8">
          Our team consists of passionate badminton players and experts who are
          dedicated to providing you with the best products and service.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Minh Nguyen",
              role: "Founder & CEO",
              bio: "Former national player with 15+ years of coaching experience",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Linh Tran",
              role: "Store Manager",
              bio: "Badminton enthusiast and equipment expert",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Tuan Pham",
              role: "Racket Specialist",
              bio: "Certified stringer with 10+ years of experience",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Mai Le",
              role: "Customer Service",
              bio: "Helping customers find their perfect gear since 2018",
              image: "/placeholder.svg?height=400&width=400",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 mx-auto">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Stores */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">Our Stores</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Main Store",
              address: "123 Badminton Street, District 1",
              city: "Ho Chi Minh City",
              phone: "(028) 1234-5678",
              hours: "Mon-Sat: 10:00 AM - 7:00 PM, Sun: 12:00 PM - 5:00 PM",
              image: "/placeholder.svg?height=300&width=500",
            },
            {
              name: "North Branch",
              address: "456 Shuttle Avenue, Cau Giay District",
              city: "Hanoi",
              phone: "(024) 8765-4321",
              hours: "Mon-Sat: 10:00 AM - 7:00 PM, Sun: Closed",
              image: "/placeholder.svg?height=300&width=500",
            },
          ].map((store, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-[200px]">
                <Image
                  src={store.image || "/placeholder.svg"}
                  alt={store.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <div>
                      <p>{store.address}</p>
                      <p>{store.city}</p>
                    </div>
                  </div>
                  <p>
                    <span className="font-medium">Phone:</span> {store.phone}
                  </p>
                  <p>
                    <span className="font-medium">Hours:</span> {store.hours}
                  </p>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <Separator className="flex-1 ml-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "The team's expertise helped me find the perfect racket for my playing style. I've been a loyal customer for 5 years now!",
              author: "Huy Tran",
              role: "Club Player",
            },
            {
              quote:
                "Best selection of badminton equipment in the city. The staff is knowledgeable and the prices are fair.",
              author: "Lan Nguyen",
              role: "Recreational Player",
            },
            {
              quote:
                "Their stringing service is top-notch. I trust them with all my rackets before tournaments.",
              author: "Binh Le",
              role: "Competitive Player",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-muted p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Visit Us Today</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Experience our wide selection of badminton equipment and get expert
          advice from our team. Whether you&apos;re a beginner or a professional
          player, we&apos;re here to help you elevate your game.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg">Shop Online</Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
