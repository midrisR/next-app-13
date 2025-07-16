export default function Footer({ employes }) {
  return (
    <footer className="bg-stone-200 text-slate-700 px-6 py-12">
      <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4 mb-32">
        {employes.map((employe, i) => (
          <div key={i}>
            <h4 className="font-bold">{employe.name}</h4>
            <p>{employe.role}</p>
            <p>{employe.phone}</p>
            <p className="break-all">{employe.email}</p>
          </div>
        ))}
      </div>

      <div className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-bold uppercase">CV. Gravindo Berkati Sukses</h4>
          <p>
            Jl. Norfolk IV Blok NF 5/27, Rorotan, Cilincing,
            <br />
            Jakarta Utara 14140
          </p>
          <p className="mt-2">Telp/Fax: 021 - 23090066</p>
          <p>Email: gravindoberkatisukses@gmail.com</p>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="font-bold uppercase mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#">
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://www.svgrepo.com/show/452196/facebook-1.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://www.svgrepo.com/show/452133/whatsapp.svg"
                alt="Whatsapp"
                className="w-6 h-6"
              />
            </a>
            <a href="#">
              <img
                src="https://www.svgrepo.com/show/364932/tiktok-logo-fill.svg"
                alt="Tiktok"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3135.3629074984156!2d106.950576!3d-6.132979!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnNTguNyJTIDEwNsKwNTcnMDQuNCJF!5e1!3m2!1sid!2sid!4v1750747644844!5m2!1sid!2sid"
          style={{ border: 0 }}
          allowFullScreen=""
          className="w-full"
          height={300}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}
