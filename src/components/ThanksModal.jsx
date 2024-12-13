/* eslint-disable react/prop-types */
import { RiCloseLargeFill } from "react-icons/ri";

const ThanksModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl w-full max-w-[1240px] relative shadow-lg mx-6 xl:mx-0 py-20">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-[#26395C] hover:text-primary"
                >
                    <RiCloseLargeFill size={24} />
                </button>

                {/* Modal Content */}
                <div className="w-full px-6">
                    <h2 className="font-bold text-2xl md:text-[28px] text-center mb-6">Thanks  For The Order</h2>
                    <p className="text-xs md:text-base text-[#656B89]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar parturient vel et odio. Est urna, sit curabitur cras -d adipiscing consequat. Urna tortor congue commodo ultricies tellus fermentum, nibh aliquet.
                        Tristique faucibus feugiat etiam ac. Dictumst et in mi varius pellentesque nisl molestie mauris aliquam. Ipsum egestas nunc aliquam vitae leo elementum etiam commodo.
                        Malesuada velit sed adipiscing convallis adipiscing aenean. At massa aliquam quis adipiscing ut. Sit eget et egestas sed vitae sollicitudin. Pellentesque id non sapien, cursus vestibulum fusce malesuada. Habitasse nullam turpis posuere nunc, platea enim lacinia lorem. Bibendum enim ante purus consectetur euismod.
                        Lorem elementum massa pharetra nisl vitae, nulla phasellus duis in. Tempor metus ornare iaculis praesent. Dolor ac tincidunt ornare purus pellentesque urna. Sed pellentesque blandit pharetra ullamcorper. Rhoncus, duis feugiat nunc auctor sed nisi diam. Vestibulum interdum consectetur diam dui risus nisl.
                        Tortor porttitor amet felis congue. Curabitur phasellus tempor sapien aenean nulla tincidunt ut orci leo. Amet, quam ut amet pharetra tellus, nisl. Cras pretium viverra leo orci. Nam ut urna pretium ornare. Pharetra, hac platea in morbi quisque. Faucibus vitae cursus sed arcu, scelerisque nisi. Lectus pellentesque cras - - aliquet nisl.
                        Blandit lorem facilisis scelerisque elit amet metus, vestibulum, sed. Ut amet, morbi mi integer faucibus magnis. Bibendum ut pellentesque nisl, facilisi malesuada ipsum morbi convallis leo. Ut iaculis porta congue aliquet accumsan ut cursus urna augue. Purus arcu gravida proin in elit eleifend id.
                        Quam in nibh amet nulla vel proin arcu, ac quisque. Lectus eget porttitor vulputate id volutpat. Maecenas id elementum vel scelerisque etiam. Vitae, non elit nisi, sollicitudin ut. Id risus orci, in vehicula turpis risus cras. Massa id mattis tortor id sit.
                        Non scelerisque sed vivamus mi ac ac consequat ornare. Vitae quis cursus dui leo proin maecenas. Convallis mauris vitae sit ut non, porttitor.</p>
                </div>
            </div>
        </div>);
};

export default ThanksModal;
