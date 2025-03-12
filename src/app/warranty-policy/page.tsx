import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  RefreshCw,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WarrantyPolicy = () => {
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
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Warranty & Return Policy
        </h1>
        <p className="text-muted-foreground">
          Our commitment to quality and customer satisfaction
        </p>
      </div>

      <Tabs defaultValue="warranty" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="warranty">Warranty Policy</TabsTrigger>
          <TabsTrigger value="returns">Return & Exchange</TabsTrigger>
        </TabsList>
        <TabsContent value="warranty" className="mt-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Warranty Coverage</h2>
              <p className="mb-4">
                At our Badminton Shop, we stand behind the quality of our
                products. Our warranty policy is designed to give you peace of
                mind with your purchase.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Rackets</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Premium rackets: 24-month warranty against
                            manufacturing defects
                          </li>
                          <li>
                            Standard rackets: 12-month warranty against
                            manufacturing defects
                          </li>
                          <li>
                            Frame cracks covered under normal use conditions
                          </li>
                          <li>
                            Warranty void if racket shows signs of impact damage
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Footwear</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            6-month warranty against manufacturing defects
                          </li>
                          <li>Covers sole separation and stitching issues</li>
                          <li>Normal wear and tear not covered</li>
                          <li>
                            Warranty void if shoes are used outside of indoor
                            courts
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Apparel</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>30-day warranty against manufacturing defects</li>
                          <li>
                            Covers seam issues, zipper failures, and fabric
                            defects
                          </li>
                          <li>Color fading from normal washing not covered</li>
                          <li>Follow care instructions to maintain warranty</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Accessories
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Bags: 12-month warranty against manufacturing
                            defects
                          </li>
                          <li>Strings: No warranty after installation</li>
                          <li>Grips: No warranty after installation</li>
                          <li>
                            Other accessories: 30-day warranty against
                            manufacturing defects
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Warranty Claim Process
              </h2>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <p className="font-medium">Contact our customer service</p>
                  <p className="text-sm text-muted-foreground">
                    Reach out to us via email or phone to report the issue with
                    your product.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Provide proof of purchase</p>
                  <p className="text-sm text-muted-foreground">
                    Submit your receipt or order number to verify the purchase
                    date and warranty period.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Product evaluation</p>
                  <p className="text-sm text-muted-foreground">
                    Return the product to our store for inspection or send
                    photos as requested by our team.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Resolution</p>
                  <p className="text-sm text-muted-foreground">
                    Based on the evaluation, we will repair, replace, or issue a
                    store credit for the defective product.
                  </p>
                </li>
              </ol>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Warranty Exclusions
              </h2>
              <p className="mb-4">Our warranty does not cover:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Damage caused by accidents, misuse, or improper care</li>
                <li>Normal wear and tear from regular use</li>
                <li>Products that have been modified or altered</li>
                <li>Damage from improper storage or transportation</li>
                <li>Products purchased from unauthorized dealers</li>
                <li>Cosmetic issues that don&apos;t affect performance</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="returns" className="mt-6">
          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
              <p className="mb-4">
                We want you to be completely satisfied with your purchase. If
                you&apos;re not, we offer a straightforward return and exchange
                policy.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <RefreshCw className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Return Period
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Unused products: 30 days from the date of purchase
                          </li>
                          <li>
                            Defective products: Report within 7 days of
                            receiving
                          </li>
                          <li>Sale items: 14 days from the date of purchase</li>
                          <li>
                            Custom-strung rackets: Non-returnable unless
                            defective
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <BadgeCheck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Return Conditions
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Product must be in original, unused condition</li>
                          <li>All tags and packaging must be intact</li>
                          <li>Receipt or proof of purchase required</li>
                          <li>
                            Returns without receipt may be eligible for store
                            credit only
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Truck className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Return Shipping
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Return shipping costs are the responsibility of the
                            customer
                          </li>
                          <li>
                            Defective items: We cover return shipping costs
                          </li>
                          <li>
                            Wrong items shipped: We cover return shipping costs
                          </li>
                          <li>Use tracked shipping method for all returns</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <RefreshCw className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Refund Process
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Refunds processed within 7 business days after
                            receiving return
                          </li>
                          <li>Original payment method will be refunded</li>
                          <li>Shipping costs are non-refundable</li>
                          <li>
                            Store credit option available for returns without
                            receipt
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Exchange Process</h2>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <p className="font-medium">Contact our customer service</p>
                  <p className="text-sm text-muted-foreground">
                    Let us know you want to exchange an item and specify the
                    replacement.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Return the original item</p>
                  <p className="text-sm text-muted-foreground">
                    Follow our return process to send back the original
                    purchase.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Price difference</p>
                  <p className="text-sm text-muted-foreground">
                    If the replacement item costs more, you&apos;ll need to pay
                    the difference. If it costs less, we&apos;ll refund the
                    difference.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Shipping for exchanges</p>
                  <p className="text-sm text-muted-foreground">
                    Customer is responsible for return shipping. We&apos;ll ship
                    the replacement item at our cost.
                  </p>
                </li>
              </ol>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Non-Returnable Items
              </h2>
              <p className="mb-4">
                The following items cannot be returned or exchanged:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Used or worn products (except for defective items)</li>
                <li>Products without original packaging or tags</li>
                <li>Racket strings after installation</li>
                <li>Grip tapes after installation</li>
                <li>Personal items like socks and underwear</li>
                <li>Clearance items marked as &quot;Final Sale&quot;</li>
                <li>Gift cards and store credits</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg mt-8">
        <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
        <p className="mb-4">
          If you have any questions about our warranty or return policy, please
          contact our customer service team:
        </p>
        <div className="grid gap-2">
          <p>
            <span className="font-medium">Email:</span>{" "}
            support@badmintonshop.com
          </p>
          <p>
            <span className="font-medium">Phone:</span> (123) 456-7890
          </p>
          <p>
            <span className="font-medium">Store Hours:</span> Monday-Saturday,
            10:00 AM - 7:00 PM
          </p>
        </div>
        <div className="mt-6">
          <Button>Contact Customer Service</Button>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
