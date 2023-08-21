import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="container md:mx-auto">
      <h1 className="text-3xl font-serif">Login</h1>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
        quod facilis. Maiores magnam placeat quis ad rem autem ex reiciendis
        totam quaerat ullam veritatis debitis, molestias deleniti amet quibusdam
        quidem explicabo modi officiis rerum facere id voluptates. Consectetur
        hic rerum voluptatum doloribus quam porro exercitationem ducimus quae
        molestias placeat tempora est dignissimos nemo aperiam nesciunt voluptas
        in tempore fugiat vero soluta ipsam et, possimus reprehenderit impedit.
        Adipisci reiciendis deserunt voluptatibus, iste esse beatae repellendus
        voluptates. Cupiditate, suscipit laborum delectus voluptatum quod fugiat
        maiores, ducimus natus totam labore ratione beatae pariatur magnam id
        error. Alias impedit expedita harum molestiae repudiandae incidunt.
      </p>
      <Link href="/pages/about-us">
        <button className="py-2 px-8 rounded-md bg-slate-600 text-white">
          Click
        </button>
      </Link>
    </div>
  );
}
