type AnswerKeyType = {
  question: string;
  answer: string;
};

type SourceType = {
  topic: string;
  link: string;
  answerKeys: AnswerKeyType[];
};

export const source: SourceType[] = [
  {
    topic: "International Relations",
    link: "international-relations",
    answerKeys: [
      {
        question: "What is International Law?",
        answer:
          "International Law is a body of rules that states and other agents accept as binding obligations in the world community, with the goal of promoting the public good for the international community.",
      },
      {
        question: "How does International Law differ from national laws?",
        answer:
          "International Law is different from national laws, which are specified in Constitutions, as it is superior to all laws with a weaker hierarchy in the international legal system.",
      },
      {
        question:
          "In what ways is International Law present in our daily lives?",
        answer:
          "International Law is mostly intangible but influences various aspects of our lives, such as traveling, the environment we live in, food we eat, border crises, trade, and weapons.",
      },
      {
        question:
          "What is the role of International Law in international relations?",
        answer:
          "International Law serves as a framework for stable and organized international relations.",
      },
      {
        question: "What are the three features of International Law?",
        answer:
          "The three features of International Law are: 1) International norms and rules (Table 15.1) 2) Applicable primarily to states but increasingly non-state actors also - MNCs, INGOs, individuals, etc. 3) Dependence on voluntary compliance more so than in domestic law (no authority to make, interpret, or enforce).",
      },
      {
        question: "Provide examples of topics covered by International Law.",
        answer:
          "International Law covers various topics, including state rights and duties (self-determination, self-defense, non-intervention, treaty obligations), jurisdiction (diplomatic sanctity, criminal prosecution, SOFA status of forces agreement), Law of the Sea (UNCLOS), Air space/Outer space (ADIZ), and the laws of war (jus in bello) concerning POWs, civilians, and hostages.",
      },
      {
        question: "What are some early examples of International Law?",
        answer:
          "Early examples of International Law include mostly peace treaties dating back to the era of Mesopotamian city-states approximately 4000 years ago.",
      },
      {
        question:
          "Which civilizations contributed to the conceptual framework of international law?",
        answer:
          "Egypt, ancient Greece, and the Roman Empire are civilizations that contributed to the conceptual framework of international law.",
      },
      {
        question:
          "What historical event is associated with the Peace of Westphalia?",
        answer:
          "The Peace of Westphalia is associated with a series of peace treaties marking the end of the 30-years and 80-years wars, the end of religious war, and the introduction of a new balance of power in Europe along with the concept of state sovereignty.",
      },
      {
        question:
          "What major events marked the turning point in International Law after WWI?",
        answer:
          "The end of WWI marked a turning point in International Law with the birth of the Soviet Union, the rise of the US, Europe’s decline, and the emergence of the League of Nations, which included the Covenant of the League and its own judicial body, the Permanent Court of International Justice (1920-46).",
      },
      {
        question:
          "What fundamental change occurred in legal thinking after WWI?",
        answer:
          "After WWI, there was a fundamental change in legal thinking, emphasizing that wars should be prevented, and disputes settled through negotiations rather than the use of force. This period also saw a shift towards multilateralism.",
      },
      {
        question:
          "What major developments in International Law occurred after WWII?",
        answer:
          "After WWII, the United Nations (UN) replaced the League of Nations with a strong commitment not to use force. The judicial organ, the International Court of Justice (ICJ), replaced the Permanent Court of International Justice (PCIJ).",
      },
      {
        question:
          "What characterized the period of the Cold War in terms of International Law?",
        answer:
          "The Cold War was characterized by bipolarity, ideological tensions, and a focus on power dynamics between the United States and the Soviet Union in the realm of International Law.",
      },
      {
        question:
          "What significant changes followed the Cold War in International Law?",
        answer:
          "Following the Cold War, there was a period of decolonization, the emergence of new international organizations, and the rise of new actors, leading to new legal problems such as terrorism, cybersecurity, and environmental issues.",
      },
      {
        question: "Who is considered the 'father of international law'?",
        answer:
          "Hugo Grotius (1583~1645) is considered the 'father of international law.'",
      },
      {
        question: "How did Adam Smith describe Hugo Grotius in 1762?",
        answer:
          "In 1762, Adam Smith described Hugo Grotius as 'the first...to give the world anything like a regular system of natural jurisprudence.'",
      },
      {
        question:
          "What did Hugo Grotius lay the foundations for in international law?",
        answer:
          "Hugo Grotius laid the foundations for international law based on natural law.",
      },
      {
        question: "Name two noted books by Hugo Grotius.",
        answer:
          "Hugo Grotius wrote 'De Jure Belli ac Pacis' [On the Law of War and Peace], dedicated to Louis XIII of France, and 'Mare Liberum' [The Free Seas].",
      },
      {
        question: "What idea did Hugo Grotius define for the first time?",
        answer:
          "Hugo Grotius was the first to define the idea of one society of states governed not by force or warfare but by actual laws and mutual agreement to enforce those laws.",
      },
      {
        question:
          "What aspects of international law did Grotius address in his writings?",
        answer:
          "In his various writings, Hugo Grotius addressed: (1) Jus ad Bellum with a focus on the doctrine of self-defense; (2) Jus in Bello (Hague Conventions of 1899 and 1907 embraced his notion of a prohibition on unnecessary suffering; (3) Rights of Individuals (precursor of modern international human rights law - right to life, food, medicine, and for the protection of non-combatants during war); (4) Humanitarian Intervention; (5) Freedom of the Seas - freedom of navigation. There is a direct link between Grotius’ concept of freedom of the seas and the 1982 UN Convention on the Law of the Sea.",
      },
      {
        question:
          "According to UN Charter Article 2(4), what do all members agree to refrain from?",
        answer:
          "All members shall refrain from threat or use of force against the territorial integrity or political independence of any state.",
      },
      {
        question: "What does the Just War Doctrine address?",
        answer:
          "The Just War Doctrine addresses when a war can be waged and how it should be carried out, including moral conditions for undertaking a just war.",
      },
      {
        question: "Define Jus Ad Bellum.",
        answer:
          "Jus Ad Bellum refers to justice in resorting to war and includes concepts like just cause, last resort, competent authority, limited objective, and reasonable hope of success.",
      },
      {
        question: "What is one component of Jus Ad Bellum?",
        answer:
          "Just cause is one component of Jus Ad Bellum, outlining the justified reasons for engaging in war.",
      },
      {
        question:
          "According to the Just War Doctrine, when should a war be undertaken?",
        answer:
          "A war should be undertaken as a last resort, meaning all peaceful options have been exhausted.",
      },
      {
        question: "What does Jus In Bello address?",
        answer:
          "Jus In Bello refers to justice in war and includes the discrimination norm (military vs. civilian) and the proportionality norm (means vs. goals).",
      },
      {
        question: "What does the discrimination norm in Jus In Bello focus on?",
        answer:
          "The discrimination norm in Jus In Bello focuses on distinguishing between military and civilian targets during war.",
      },
      {
        question:
          "What does the proportionality norm in Jus In Bello consider?",
        answer:
          "The proportionality norm in Jus In Bello considers the balance between the means used in war and the goals sought, ensuring a reasonable relationship.",
      },
      {
        question:
          "According to Jus Ad Bellum, why should the objective of a war be limited?",
        answer:
          "The objective of a war should be limited according to Jus Ad Bellum because an unlimited war is considered immoral.",
      },
      {
        question:
          "What is the significance of having a reasonable hope of success according to Jus Ad Bellum?",
        answer:
          "According to Jus Ad Bellum, a war is justified only if there is a reasonable hope of success; vain wars, those without a realistic chance of success, are not considered justified.",
      },
      {
        question:
          "What is the main principle of the Realist approach to International Law?",
        answer:
          "The Realist approach, known as the Command Theory of Law, asserts that only law backed by force is true law. This perspective emphasizes the importance of force or the threat of force to ensure compliance.",
      },
      {
        question:
          "Who expressed the idea that 'covenants without swords are but words' and 'where there is no common power, there is no law'?",
        answer:
          "Thomas Hobbes, in his work 'Leviathan,' expressed the idea that 'covenants without swords are but words' and 'where there is no common power, there is no law,' aligning with the Realist approach to International Law.",
      },
      {
        question: "How does the Realist approach advocate for compliance?",
        answer:
          "The Realist approach advocates for compliance through force or the threat of its use, emphasizing obedience to maintain order in the international system.",
      },
      {
        question:
          "Who is associated with the Command Theory of Law, stating that law is 'the command of the sovereign'?",
        answer:
          "John Austin, an English jurist (1790-1859), is associated with the Command Theory of Law, defining law as 'the command of the sovereign.'",
      },
      {
        question:
          "What is a key dilemma highlighted by the Realist approach concerning International Law and sovereignty?",
        answer:
          "The Realist approach raises questions about International Law versus sovereignty, particularly in scenarios like Humanitarian Intervention and Responsibility to Protect (R2P).",
      },
      {
        question:
          "What is the main principle of the Behavioralist approach to International Law?",
        answer:
          "The Behavioralist approach focuses on voluntary habits of compliance, where rules and norms are habitually followed. This perspective emphasizes legitimacy in law and public institutions.",
      },
      {
        question:
          "Give examples of voluntary habits of compliance according to the Behavioralist approach.",
        answer:
          "Examples of voluntary habits of compliance according to the Behavioralist approach include paying taxes, obeying traffic lights, and respecting private properties. The approach emphasizes that compliance best serves both public and personal interests.",
      },
      {
        question:
          "What is the key consideration in the Behavioralist approach regarding compliance?",
        answer:
          "In the Behavioralist approach, the key consideration is finding a balance between enforcement and legitimacy, understanding that compliance is most effective when it aligns with both public and personal interests.",
      },
      {
        question: "What is the nature of International Treaties & Agreements?",
        answer:
          "International Treaties & Agreements are formal, binding legal agreements between states that establish explicit norms based on the consent of multiple states, resulting in binding obligations.",
      },
      {
        question:
          "What is the key characteristic of International Treaties & Agreements?",
        answer:
          "The key characteristic of International Treaties & Agreements is the codification of existing practices or the creation of new norms, shaping the legal framework among participating states.",
      },
      {
        question:
          "Can you name a few examples of International Treaties & Agreements?",
        answer:
          "Examples of International Treaties & Agreements include the UN Charter, the 3rd Law of the Sea Convention (1982), the Montreal Protocol (1987), the Vienna Convention on Diplomatic Relations (1961), and the NPT (1968).",
      },
      {
        question:
          "What is the principle of 'Pacta sunt servanda' in the context of treaties?",
        answer:
          "'Pacta sunt servanda' means treaties must be observed, emphasizing the obligation of states to adhere to the terms and conditions of the treaties they have ratified.",
      },
      {
        question:
          "What does 'Rebus sic stantibus' refer to in the context of treaties?",
        answer:
          "'Rebus sic stantibus' allows for exceptions to compliance with a treaty when there is a fundamental change in the original treaty conditions or circumstances. This may occur under conditions of duress, exploitation, as an instrument of power, or due to fraud.",
      },
      {
        question:
          "Can you provide an example illustrating the concept of 'Rebus sic stantibus'?",
        answer:
          "The Korea-Japan Treaty of 1965, particularly regarding the issue of 'comfort women,' is an example where the concept of 'Rebus sic stantibus' may be considered due to changes in circumstances and interpretations of the treaty's provisions.",
      },
      {
        question: "What are Customary rules in international law based on?",
        answer:
          "Customary rules in international law are based on universality and repeated usage regulated by customs, particularly through state practice, which involves observed behavior and actions.",
      },
      {
        question: "Give examples of areas governed by Customary rules.",
        answer:
          "Areas governed by Customary rules include diplomatic immunity, territorial sea limits, Exclusive Economic Zones (EEZ), and the exemption of noncombatants from attack during wartime. An example of a violation is North Korea's actions in the Korea Air Defense Identification Zone (KADIZ) and the Northern Limit Line (NLL).",
      },
      {
        question: "What is Opinio juris in customary international law?",
        answer:
          "In customary international law, opinio juris is necessary to establish a legally binding custom. It refers to a subjective obligation to be bound to the law in question. The ICJ Statute Article 38(1)(b) states that the custom to be applied must be 'accepted as law.'",
      },
      {
        question:
          "Why is State practice significant in establishing Customary rules?",
        answer:
          "State practice is significant in establishing Customary rules because it needs to be accepted as binding law by those involved. It demonstrates a consistent and recognized pattern of behavior among states.",
      },
      {
        question: "What is the Paquette Havana case, 1900, known for?",
        answer:
          "The Paquette Havana case, 1900, is known for being a case of the US Supreme Court recognizing that capturing fishing vessels as prizes of war violated customary international law. This case emerged during the Spanish-American War.",
      },
      {
        question: "What does the Paquete Habana & Lola case illustrate?",
        answer:
          "The Paquete Habana & Lola case illustrates a situation where the US Supreme Court acknowledged that capturing fishing vessels as prizes of war violated customary international law. This recognition highlights the applicability and acknowledgment of international law by the United States.",
      },
      {
        question: "What is the ICJ and when was it established?",
        answer:
          "The ICJ (International Court of Justice) was established in 1945 and is the most important court in the international system.",
      },
      {
        question: "Where is the ICJ located?",
        answer:
          "The ICJ is located in the Hague, Netherlands, and is a formal organ of the United Nations (UN).",
      },
      {
        question: "How many members does the ICJ have?",
        answer: "The ICJ consists of 15 members.",
      },
      {
        question: "What are the two types of cases handled by the ICJ?",
        answer:
          "The ICJ deals with contentious cases (181) and advisory cases (27).",
      },
      {
        question: "Does the ICJ have automatic jurisdiction over cases?",
        answer:
          "No, the ICJ does not have automatic jurisdiction. States need to agree to submit their disputes to the court.",
      },
      {
        question: "How can a state make ICJ jurisdiction compulsory?",
        answer:
          "A state can make ICJ jurisdiction compulsory through the Optional Clause (Article 36(2) of the ICJ Statute), where states may declare that they recognize the court's jurisdiction in all legal disputes.",
      },
      {
        question:
          "How many UN member states have officially declared acceptance of the optional clause?",
        answer:
          "Of the 193 UN member states, 73 have officially declared acceptance of the optional clause.",
      },
      {
        question: "What was the Nicaragua vs United States case (1984) about?",
        answer:
          "The Nicaragua vs United States case involved the US, Contras, the Sandinista government, and El Salvador. It was deemed a political conflict (non-justiciable) by the ICJ, although the court ruled that the US violated customary international law. The US withdrew from the court's compulsory jurisdiction in 1986.",
      },
      {
        question:
          "What were some of the violations found by the ICJ in the Nicaragua vs United States case?",
        answer:
          "In the Nicaragua vs United States case, the ICJ found the US 'in breach of its obligations under customary international law not to use force against another State,' 'not to intervene in its affairs,' 'not to violate its sovereignty,' 'not to interrupt peaceful maritime commerce,' and 'in breach of its obligations under Article XIX of the Treaty of Friendship, Commerce, and Navigation.'",
      },
      {
        question: "What are the options for enforcement?",
        answer:
          "Options for enforcement include sanctions, retortion, and reprisal.",
      },
      {
        question: "How many UNSC resolutions have been issued?",
        answer: "There have been 2,600 UNSC resolutions.",
      },
      {
        question: "How many UNSC resolutions specifically target North Korea?",
        answer:
          "There are 9 UNSC resolutions specifically targeting North Korea.",
      },
      {
        question: "What are some countries subjected to UN sanctions?",
        answer:
          "Countries subjected to UN sanctions include North Korea, Iran, Mali, South Sudan, Central African Republic, Yemen, Guinea-Bissau, Libya, etc.",
      },
      {
        question:
          "What did Prof. Thomas Biersteker's 2013 study on UN sanctions conclude?",
        answer:
          "Prof. Thomas Biersteker's 2013 study on UN sanctions reviewed 62 sanctions over 22 years and concluded that 71% were effective or partially effective in signaling, 50% in constraining, and 37% in coercing a target.",
      },
      {
        question: "What are some success stories of sanctions?",
        answer:
          "Success stories of sanctions include South Africa abandoning apartheid (1994), Libya ending its WMD program (2003), and domestic parties in Liberia complying with the peace agreement and democratic process (2005).",
      },
      {
        question: "What are some failures of sanctions?",
        answer:
          "Failures of sanctions include issues with North Korea, Russia, and Iran.",
      },
      {
        question: "What is the purpose of International Law?",
        answer:
          "International Law aims to prevent war and minimize human suffering. It contributes to the peace and stability of the international system.",
      },
      {
        question: "What does UN Charter Article 2(4) state?",
        answer:
          "UN Charter Article 2(4) states, 'All Members shall refrain in their international relations from the threat or use of force against the territorial integrity or political independence of any State.'",
      },
      {
        question: "Can the ICJ resolve the Tokdo/Takeshima Issue?",
        answer:
          "Japan and South Korea have not taken the Tokdo issue to the ICJ due to the ICJ's views on imperialism and historical background.",
      },
      {
        question: "What is the Minquiers and Ecrehos Case (1953) about?",
        answer:
          "The Minquiers and Ecrehos Case (1953) was an ICJ case on conflicting territorial claims between the UK and France. The ICJ awarded the reefs to the UK based on historical claims and legal jurisdiction.",
      },
      {
        question: "What is the Preah Vihear Temple Case (1962) about?",
        answer:
          "The Preah Vihear Temple Case (1962) involved a territorial dispute between Thailand and Cambodia. The ICJ awarded Cambodia since Thailand did not correct an error on the map, leading to an incorrect border drawing.",
      },
    ],
  },
  {
    topic: "International Security",
    link: "international-securty",
    answerKeys: [
      {
        question: "What is an Arms Race?",
        answer:
          "An Arms Race is a competition between two or more states to produce larger and better weapons systems, greater armed forces, and superior military technology. The goal is to stay ahead of other competitors, and there is no ceiling to the race.",
      },
      {
        question: "What is Arms Control?",
        answer:
          "Arms Control involves restrictions on the development, production, stockpiling, proliferation, and use of weapons, particularly Weapons of Mass Destruction (WMD). It can include mechanisms to increase control, especially in response to the nuclear arms race in the 1950s-60s. Arms Control may involve enforcing limitations upon a non-consenting country.",
      },
      {
        question: "What does Disarmament generally refer to?",
        answer:
          "Disarmament generally refers to the concept of the total elimination of Weapons of Mass Destruction (WMD) or a certain type of conventional arms. Examples include the Anti-Personnel Mine Ban Convention (1997), the Bangkok Treaty (South East Asia Nuclear-Weapon-Free Zone, 1995), the Biological Weapons Convention (1972), the Chemical Weapons Convention (1992), and the Comprehensive Nuclear-Test-Ban Treaty (1996).",
      },
      {
        question: "What is the focus of the Geneva Conference (1864)?",
        answer:
          "The Geneva Conference (1864) focuses on establishing a relief system for the wounded in war.",
      },
      {
        question: "What do the Hague Conventions of 1899 and 1907 entail?",
        answer:
          "The Hague Conventions of 1899 and 1907 are a series of international treaties and declarations negotiated at two international peace conferences in the Netherlands. They are among the first formal statements of the laws of war and war crimes.",
      },
      {
        question: "What was the purpose of the Hague Conventions?",
        answer:
          "The Hague Conventions aimed to establish formal statements of the laws of war and war crimes. They provided a framework for regulating the conduct of armed conflicts.",
      },
      {
        question: "What happened to the planned third conference in 1915?",
        answer:
          "The planned third conference of the Hague Conventions in 1915 was cancelled due to the outbreak of World War I.",
      },
      {
        question:
          "When was the Hague Conference proposed, and who proposed it?",
        answer:
          "The Hague Conference was proposed on 24 August 1898 by Russian Tsar Nicholas II. The conference opened on 18 May 1899, was signed on 29 July, and entered into force on 4 September 1900.",
      },
      {
        question:
          "What are the main components of the Hague Convention of 1899?",
        answer:
          "The Hague Convention of 1899 consisted of three main treaties and three additional declarations.",
      },
      {
        question:
          "What does the Convention for the Pacific Settlement of International Disputes include?",
        answer:
          "The Convention for the Pacific Settlement of International Disputes includes the creation of the Permanent Court of Arbitration, which still exists today. It was ratified by major powers, including the United States, Great Britain, Austria-Hungary, Germany, France, Italy, Spain, Russia, Japan, and China.",
      },
      {
        question:
          "What does the Convention with respect to the Laws and Customs of War on Land cover?",
        answer:
          "The Convention with respect to the Laws and Customs of War on Land contains laws applicable to all wars on land between signatories. It specifies the treatment of prisoners of war, includes provisions from the Geneva Convention of 1864 for the treatment of the wounded, and prohibits the use of poisons, killing of surrendered enemy combatants, looting, and the attack or bombardment of undefended towns or habitations.",
      },
      {
        question:
          "What does the Convention for the Adaptation to Maritime Warfare of the Principles of the Geneva Convention of 22 August 1864 entail?",
        answer:
          "The Convention for the Adaptation to Maritime Warfare of the Principles of the Geneva Convention of 22 August 1864 provides for the protection of marked hospital ships and requires them to treat the wounded and shipwrecked sailors of all belligerent parties.",
      },
      {
        question: "Who initiated the second Hague Conference in 1907?",
        answer:
          "The second Hague Conference in 1907 was initiated by U.S. President Theodore Roosevelt in 1904.",
      },
      {
        question:
          "What led to the postponement of the second Hague Conference?",
        answer:
          "The second Hague Conference was postponed due to the Russo-Japanese War of 1904-05.",
      },
      {
        question: "When was the second Hague Conference finally held?",
        answer:
          "The second Hague Conference was finally held between 15 June and 18 October in 1907.",
      },
      {
        question: "What was the goal of the second Hague Conference?",
        answer:
          "The goal of the second Hague Conference was to expand upon the 1899 Convention, especially in light of the naval arms race. The British attempted to secure the limitation of naval armaments, but Germany rejected it fearing British dominance.",
      },
      {
        question: "What did the second Hague Conference achieve?",
        answer:
          "The second Hague Conference enlarged the mechanism for voluntary arbitration and established conventions regulating the collection of debts, rules of war, and the rights and obligations of neutrals. The treaties, declarations, and final act were signed on 18 October 1907, entering into force on 26 January 1910.",
      },
      {
        question:
          "What does Convention (I) of the second Hague Conference confirm and expand on?",
        answer:
          "Convention (I) of the second Hague Conference confirms and expands on Convention (I) of 1899. It is in force for 105 states, and 115 states have ratified one or both of the 1907 Convention (I) and the 1899 Convention (I), which together are the founding documents of the Permanent Court of Arbitration.",
      },
      {
        question:
          "What does Convention (III) of the second Hague Conference set out?",
        answer:
          "Convention (III) of the second Hague Conference sets out the accepted procedure for a state making a declaration of war.",
      },
      {
        question:
          "What does Convention (IV) of the second Hague Conference confirm?",
        answer:
          "Convention (IV) of the second Hague Conference confirms, with minor modifications, the provisions of Convention (II) of 1899. All major powers ratified it.",
      },
      {
        question:
          "What does Convention (X) of the second Hague Conference update?",
        answer:
          "Convention (X) of the second Hague Conference updates Convention (III) of 1899 to reflect the amendments made to the 1864 Geneva Convention. Convention (X) was ratified by all major states except the United Kingdom.",
      },
      {
        question:
          "What does Convention (XII) of the second Hague Conference aim to establish?",
        answer:
          "Convention (XII) of the second Hague Conference aims to establish the International Prize Court for the resolution of conflicting claims relating to captured ships during wartime. However, it is the one convention that never came into force and was ratified only by Nicaragua.",
      },
      {
        question:
          "What does Declaration (XIV) of the second Hague Conference prohibit?",
        answer:
          "Declaration (XIV) of the second Hague Conference prohibits the discharge of projectiles and explosives from balloons. It extended the provisions of Declaration (IV,1) of 1899 to the close of the planned Third Peace Conference, which never took place. Among the major powers, this was ratified only by China, the United Kingdom, and the United States.",
      },
      {
        question: "When was the League of Nations founded?",
        answer: "The League of Nations was founded at the end of World War I.",
      },
      {
        question: "What was the primary goal of the League of Nations?",
        answer:
          "The primary goal of the League of Nations was to keep peace by preventing wars through collective security, disarmament, and settling international disputes.",
      },
      {
        question:
          "What did President Woodrow Wilson say about idealism and America?",
        answer:
          '"Sometimes people call me an idealist. Well, that is the way I know I am an American... America is the only idealist nation in the world." - President Woodrow Wilson.',
      },
      {
        question:
          "Why couldn't the League of Nations prevent the aggression by the Axis Powers?",
        answer:
          "The League of Nations could not prevent the aggression by the Axis Powers, including Hitler's aggression in the Rhineland (occupation of the Sudetenland and Anschluss), ultimately leading to the outbreak of World War II.",
      },
      {
        question: "Which countries withdrew from the League of Nations?",
        answer:
          "Germany, Japan, Italy, and Spain withdrew from the League of Nations. The United States never joined, discrediting the League.",
      },
      {
        question: "How long did the League of Nations last?",
        answer:
          "The League of Nations lasted for 27 years and was replaced by the United Nations after World War II.",
      },
      {
        question:
          "What were the key issues in the debate over U.S. entry into the League of Nations?",
        answer:
          "The key issues in the debate over U.S. entry into the League of Nations included collective security vs. national sovereignty, idealism vs. pragmatism, the responsibilities of powerful nations, and the use of force to accomplish idealistic goals.",
      },
      {
        question:
          "What was the stance of U.S. public opinion on war and interventionism?",
        answer:
          "U.S. public opinion was against war and interventionism during the debate over the League of Nations.",
      },
      {
        question:
          "What was the Republican opposition's stance on U.S. entry into the League of Nations?",
        answer:
          "There was strong Republican opposition to the idea of U.S. entry into the League of Nations. They were concerned that it could re-involve the U.S. in European warfare, seen as a violation of U.S. sovereignty, and aligned with isolationist sentiments.",
      },
      {
        question: "When was the Washington Naval Conference held?",
        answer:
          "The Washington Naval Conference was held from 12 November 1921 to 6 February 1922.",
      },
      {
        question:
          "What prompted the calling of the Washington Naval Conference?",
        answer:
          "The Washington Naval Conference was called in response to the very costly naval arms race between the U.S., Japan, and Britain after World War I.",
      },
      {
        question:
          "Which nations participated in the Washington Naval Conference?",
        answer:
          "Nine nations participated in the Washington Naval Conference: the United States, Japan, China, France, Britain, Italy, Belgium, Netherlands, and Portugal.",
      },
      {
        question:
          "What was the significance of the Washington Naval Conference?",
        answer:
          "The Washington Naval Conference, conducted outside the League of Nations, was the first international conference held in the United States and the first arms control conference in history. It aimed to address interests in the Pacific Ocean and East Asia.",
      },
      {
        question: "What were the results of the Washington Naval Treaty?",
        answer:
          "The results of the Washington Naval Treaty included a 10-year moratorium on the construction of capital vessels, limitations on the tonnage for aircraft carriers, and a tonnage ratio for capital ships among the top naval powers. Additionally, the top three naval powers agreed to dismantle a total of 70 ships and pledged not to build new fortifications in their Pacific possessions.",
      },
      {
        question:
          "When did the pacts and treaties resulting from the Washington Naval Treaty terminate?",
        answer:
          "The pacts and treaties resulting from the Washington Naval Treaty remained in effect for fourteen years until Japan ended participation in 1936.",
      },
      {
        question: "What is the Geneva Conference 1925?",
        answer:
          "The Geneva Conference 1925 is a treaty prohibiting the use of chemical and biological weapons in international armed conflicts.",
      },
      {
        question:
          "When was the Geneva Conference 1925 signed and when did it enter into force?",
        answer:
          "The Geneva Conference 1925 was signed on 17 June 1925, and it entered into force on 8 February 1928.",
      },
      {
        question: "What did the Geneva Conference 1925 prohibit?",
        answer:
          "The Geneva Conference 1925 prohibited the use of 'asphyxiating, poisonous or other gases, and of all analogous liquids, materials or devices' and 'bacteriological methods of warfare.'",
      },
      {
        question: "What aspects did the Geneva Conference 1925 not cover?",
        answer:
          "The Geneva Conference 1925 had a general prohibition on chemical weapons and biological weapons but did not deal with production, storage, or transfer. These aspects were later addressed by the 1972 Biological Weapons Convention (BWC) and the 1993 Chemical Weapons Convention (CWC).",
      },
      {
        question: "What is the Kellogg–Briand Pact (1928)?",
        answer:
          "The Kellogg–Briand Pact (1928) is an international agreement renouncing the use of war to resolve 'disputes or conflicts of whatever nature or of whatever origin.'",
      },
      {
        question:
          "When was the Kellogg–Briand Pact (1928) signed and by which countries?",
        answer:
          "The Kellogg–Briand Pact (1928) was signed by Germany, France, and the United States on August 27, 1928, and by most other nations soon after.",
      },
      {
        question:
          "Who sponsored the Kellogg–Briand Pact (1928) and what did it renounce?",
        answer:
          "Sponsored by France and the U.S., the Pact renounced the use of war and called for the peaceful settlement of disputes. It is named after U.S. Secretary of State Frank B. Kellogg and French Foreign Minister Aristide Briand.",
      },
      {
        question: "What is the Baruch Plan (1946)?",
        answer:
          "The Baruch Plan, presented by Bernard Baruch, was a report to the UN Atomic Energy Commission (UNAEC) in 1946.",
      },
      {
        question: "What was the objective of the Baruch Plan?",
        answer:
          "The Baruch Plan aimed to regulate atomic energy, with key proposals including the creation of an international authority, international control of fissionable raw materials, inspections to prevent violations, and a global distribution of atomic plants for peaceful purposes.",
      },
      {
        question: "What were the proposed steps in the Baruch Plan?",
        answer:
          "The proposed steps in the Baruch Plan included the cessation of the manufacture of atomic bombs, destruction of existing bombs, and steps leading to the abandonment of the U.S. atomic bomb monopoly.",
      },
      {
        question: "How did the Soviets respond to the Baruch Plan?",
        answer:
          "The Soviets rejected the Baruch Plan, leading to an intensification of the Cold War, especially following the successful Soviet explosion of their first atomic bomb in August 1949.",
      },
      {
        question: "What is the Nuclear Non-Proliferation Theory (1968)?",
        answer:
          "The Nuclear Non-Proliferation Theory refers to the Treaty on the Non-Proliferation of Nuclear Weapons (NPT) with the objectives of preventing the spread of nuclear weapons and technology, promoting cooperation in the peaceful uses of nuclear energy, and working towards nuclear disarmament and general and complete disarmament.",
      },
      {
        question: "When was the NPT signed and when did it enter into force?",
        answer: "The NPT was signed in 1968 and entered into force in 1970.",
      },
      {
        question: "How many countries are members of the NPT?",
        answer: "The NPT has 190 state members.",
      },
      {
        question:
          "Which country joined the NPT in 1985 but later withdrew in 2003?",
        answer: "North Korea joined the NPT in 1985 but withdrew in 2003.",
      },
      {
        question: "Which four states have never joined the NPT?",
        answer:
          "India, Israel, Pakistan, and South Sudan have never joined the NPT.",
      },
      {
        question:
          "Which five states are recognized as nuclear-weapon states (P5) by the NPT?",
        answer:
          "The NPT recognizes the United States, Russia, the United Kingdom, France, and China as nuclear-weapon states (P5).",
      },
      {
        question: "What is the three-pillar system of the NPT?",
        answer:
          "The NPT's three-pillar system includes non-proliferation, disarmament, and the right to peacefully use nuclear technology (Article 4).",
      },
      {
        question: "What is SALT I?",
        answer:
          "SALT I (Strategic Arms Limitation Talks) was a series of negotiations between the United States and the Soviet Union from 1969 to 1972, resulting in agreements on limits and restraints of their strategic armaments.",
      },
      {
        question: "When was SALT I signed, and when did it enter into force?",
        answer:
          "SALT I was signed on 26 May 1972 and entered into force on 3 October 1972.",
      },
      {
        question: "What were the key provisions of SALT I?",
        answer:
          "SALT I included an Interim Agreement on limiting strategic offensive arms and the ABM Treaty on limiting strategic defensive systems. It marked the first agreement between the U.S. and the USSR that placed limits and restraints on their nuclear weapons systems.",
      },
      {
        question:
          "What was the Protocol to the Agreement with regard to Article III in SALT I?",
        answer:
          "The Protocol to the Agreement with regard to Article III set limits on SLBM launchers for the United States and the USSR, with additional allowances for operational replacements.",
      },
      {
        question: "What is SALT II?",
        answer:
          "SALT II, signed on 18 June 1979, aimed to replace the Interim Agreement of SALT I with a long-term comprehensive treaty. However, it never entered into force due to the Soviet invasion of Afghanistan and was superseded by the START I Treaty in 1991.",
      },
      {
        question: "When was START I signed, and when did it enter into force?",
        answer:
          "START I (Strategic Arms Reduction Treaty) was signed on 31 July 1991, and it entered into force on 5 December 1994.",
      },
      {
        question: "What were the key provisions of START I?",
        answer:
          "START I established aggregate limits for delivery vehicles and warheads for each party, leading to significant reductions in strategic nuclear weapons. The Treaty expired on 5 December 2009.",
      },
      {
        question: "What is START II?",
        answer:
          "START II (Strategic Arms Reduction Treaty II) was a bilateral treaty signed on 3 January 1993, aiming to reduce and limit strategic offensive arms. However, Russia declared it null and void on 14 June 2002.",
      },
      {
        question: "What is the New START Treaty?",
        answer:
          "The New START (Strategic Arms Reduction Treaty) is a nuclear arms reduction treaty between the United States and Russia, signed on 8 April 2010 in Prague.",
      },
      {
        question: "When did the New START Treaty enter into force?",
        answer: "The New START Treaty entered into force on 5 February 2011.",
      },
      {
        question: "What treaty did New START replace?",
        answer:
          "New START replaced the Treaty of Moscow (SORT), which was due to expire in December 2012. It is also considered a follow-up to the START I treaty, which expired in December 2009.",
      },
      {
        question: "What are the key provisions of the New START Treaty?",
        answer:
          "Under the terms of the New START Treaty, the number of strategic nuclear missile launchers is reduced by half. It limits the number of deployed strategic nuclear warheads to 1,550, which is nearly two-thirds less than the original START treaty. The treaty also limits the number of deployed and non-deployed ICBM launchers, SLBM launchers, and heavy bombers equipped for nuclear armaments to 800. The number of deployed ICBMs, SLBMs, and heavy bombers with nuclear armaments is limited to 700. The treaty allows for satellite and remote monitoring, as well as 18 on-site inspections per year to verify limits.",
      },
      {
        question: "What is the ABM Treaty of 1972?",
        answer:
          "The Anti-Ballistic Missile (ABM) Treaty of 1972 was a treaty signed on 26 May 1972, between the United States and the USSR. It entered into force on 3 October 1972.",
      },
      {
        question: "When did the ABM Treaty cease to be in force?",
        answer:
          "The ABM Treaty ceased to be in force on 13 June 2002, after the United States formally withdrew from the Treaty.",
      },
      {
        question: "What was the duration of the ABM Treaty?",
        answer:
          "The ABM Treaty was in force from 3 October 1972, to 13 June 2002.",
      },
      {
        question: "What were the key provisions of the ABM Treaty?",
        answer:
          "As part of the Strategic Arms Limitation Talks, the ABM Treaty barred the United States and the Soviet Union from deploying nationwide defenses against strategic ballistic missiles. The original terms allowed both countries to deploy two fixed, ground-based defense sites with 100 missile interceptors each. The treaty was later modified in a protocol signed on July 3, 1974, reducing the number of permitted defenses. The Soviet Union chose to keep its existing missile defense system around Moscow, while the United States deployed its 100 permitted missile interceptors to protect an ICBM base near Grand Forks, North Dakota.",
      },
      {
        question:
          "What is the INF Treaty (Intermediate-Range Nuclear Forces Treaty) of 1987?",
        answer:
          "The INF Treaty, signed on 8 December 1987 and entered into force on 1 June 1988, aimed to eliminate an entire class of nuclear weapons delivery systems. Both parties, the United States and the Soviet Union, were prohibited from testing, producing, or possessing ground-launched ballistic and cruise missiles with ranges between 500 and 5,500 km (300 to 3,400 miles). The treaty required both parties to destroy their existing stockpiles within three years.",
      },
      {
        question: "What were the obligations outlined in the INF Treaty?",
        answer:
          "The INF Treaty defined intermediate-range missiles as ground-launched ballistic missiles (GLBM) or ground-launched cruise missiles (GLCM) with a range between 1,000 km to 5,500 km. Shorter-range missiles were defined as GLBMs or GLCMs with a range between 500 km and 1,000 km. The treaty covered specific missiles, including Pershing II and BGM-109G for the United States, and SS-20, SS-4, and SS-5 for the Soviet Union. It applied to all land-based missiles regardless of their equipment (nuclear, conventional, etc.).",
      },
      {
        question:
          "Why did U.S. President Donald Trump announce the withdrawal from the INF Treaty?",
        answer:
          "U.S. President Donald Trump announced the withdrawal from the INF Treaty citing several reasons, including Russia's repeated violation of the INF terms, particularly the development of the SSC-8 (9M729) missile system. The treaty was also criticized for leaving China's arms buildup unchecked, and the U.S. considered itself the only country constrained by the treaty. Trump's administration expressed concerns about Russia's non-compliance and the need to address new security challenges.",
      },
      {
        question:
          "What were the implications of Trump's withdrawal from the INF Treaty?",
        answer:
          "The withdrawal raised concerns about the potential for a new arms race. Russia was deemed to be free from all INF Treaty obligations, although it was accused of violating the terms. The move was criticized for potentially removing the constraints on Russia's missile development. The U.S. Nuclear Posture Review in 2018 outlined intentions to develop intermediate-range missiles to counter Russia, indicating a shift in U.S. policy.",
      },
      {
        question: "What is the Chemical Weapons Convention (CWC) of 1993?",
        answer:
          "The Chemical Weapons Convention (CWC) is an arms control treaty that outlaws the production, stockpiling, and use of chemical weapons and their precursors. The convention is based in The Hague, Netherlands, and it entered into force in 1997. Its main obligations include prohibiting the use and production of chemical weapons and requiring the destruction of all existing chemical weapons.",
      },
      {
        question: "What is the Comprehensive Nuclear-Test-Ban Treaty (CTBT)?",
        answer:
          "The Comprehensive Nuclear-Test-Ban Treaty (CTBT) is a multilateral treaty by which states agree to ban all nuclear explosions in all environments, for military or civilian purposes. It was adopted by the United Nations General Assembly on 10 September 1996 but has not entered into force due to the non-ratification of eight specific states. The treaty, opened for signature on 24 September 1996, has an indefinite duration. As of now, it has 183 signatories and 159 ratifications.",
      },
      {
        question: "What are the main components of the CTBT?",
        answer:
          "The CTBT itself includes a Protocol in three parts: Part I detailing the International Monitoring System (IMS); Part II on On-Site Inspections (OSI); and Part III on Confidence-Building Measures (CBMs).",
      },
      {
        question: "What are the basic obligations of the CTBT?",
        answer:
          "The CTBT bans any nuclear weapon test explosion or any other nuclear explosion, indicating a true zero yield. The treaty is often associated with a ban on the production of fissile material for anything other than verified peaceful use, contributing to nuclear disarmament.",
      },
       {
    "question": "What is the Missile Technology Control Regime (MTCR)?",
    "answer": "The Missile Technology Control Regime (MTCR) is an informal and voluntary association of countries with the shared goals of preventing the proliferation of unmanned delivery systems capable of delivering weapons of mass destruction. It also aims to coordinate national export licensing efforts to prevent the proliferation of such systems. Established in 1987 by Canada, France, Germany, Italy, Japan, the United Kingdom, and the United States, the MTCR has since grown to include a total of thirty-four countries, all of which have equal standing within the regime."
  },
  {
    "question": "What are the goals of the MTCR?",
    "answer": "The primary goals of the MTCR are to prevent the proliferation of unmanned delivery systems capable of delivering weapons of mass destruction (WMD), such as nuclear, chemical, and biological weapons. The regime seeks to achieve these goals through informal cooperation and voluntary efforts among its member countries."
  }
    ],
  },
];
