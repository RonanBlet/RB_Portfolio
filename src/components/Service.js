const Service = ({ backgroundColor, img, titre, text }) => {

  let serviceColor;

    switch (backgroundColor) {
        case '1':
            serviceColor = {
              background: "var(--Gradient-Blue, radial-gradient(204.33% 86.31% at 13.78% 50%, #403DFC 0%, #CCD4FF 100%))"
            };
            break;
        case '2':
            serviceColor = {
                background: "var(--Gradient-Purple, radial-gradient(208.03% 87.87% at 12.05% 47%, #C44CED 0%, #EBB0FF 100%))"
            };
            break;
        case '3':
            serviceColor = {
              background: "var(--Green-Gradient, radial-gradient(182.79% 77.21% at 22.79% 50%, #48E34B 0%, #ACFFAE 100%))"
            };
            break;
        default:
            console.log('pas de couleur pour le service');
            return;
    }

  return (
    <div className="card" style={serviceColor}>
      <img src={img} alt='icon' />
      <h3>{titre}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Service;