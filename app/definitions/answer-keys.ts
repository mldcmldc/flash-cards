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
        question: "What is the Missile Technology Control Regime (MTCR)?",
        answer:
          "The Missile Technology Control Regime (MTCR) is an informal and voluntary association of countries with the shared goals of preventing the proliferation of unmanned delivery systems capable of delivering weapons of mass destruction. It also aims to coordinate national export licensing efforts to prevent the proliferation of such systems. Established in 1987 by Canada, France, Germany, Italy, Japan, the United Kingdom, and the United States, the MTCR has since grown to include a total of thirty-four countries, all of which have equal standing within the regime.",
      },
      {
        question: "What are the goals of the MTCR?",
        answer:
          "The primary goals of the MTCR are to prevent the proliferation of unmanned delivery systems capable of delivering weapons of mass destruction (WMD), such as nuclear, chemical, and biological weapons. The regime seeks to achieve these goals through informal cooperation and voluntary efforts among its member countries.",
      },
    ],
  },
  {
    topic: "International Organization",
    link: "international-organization",
    answerKeys: [
      {
        question: "What is the Delian League?",
        answer:
          "The Delian League was founded and led by Athens in 478 BC. Its purpose was to fend off the Persians and facilitate collective defense among its member states.",
      },
      {
        question:
          "How many international governmental organizations (IGOs) are there?",
        answer:
          "There are more than 3,500 international governmental organizations (IGOs).",
      },
      {
        question: "How many non-governmental organizations (NGOs) are there?",
        answer: "There are 55,000 non-governmental organizations (NGOs).",
      },
      {
        question: "What are some examples of IGOs?",
        answer:
          "Examples of IGOs include global organizations such as the United Nations (UN) and regional organizations such as the Organization of American States (OAS).",
      },
      {
        question:
          "What were some 19th-century multinational efforts to keep peace?",
        answer:
          "The Concert of Europe led to multinational efforts to keep peace in the 19th century.",
      },
      {
        question:
          "What were the precursors to 20th-century international organizations?",
        answer:
          "The League of Nations and the United Nations were precursors to 20th-century international organizations.",
      },
      {
        question:
          "What is the centerpiece of a network of international organizations?",
        answer:
          "The United Nations (UN) is the centerpiece of a network of international organizations.",
      },
      {
        question:
          "What are some diverse functions of international organizations (IOs)?",
        answer:
          "International organizations (IOs) have diverse functions, including delivering services and aid (e.g., World Health Organization, International Monetary Fund), providing forums for negotiation (e.g., European Union), and settling disputes (e.g., World Trade Organization).",
      },
      {
        question: "How do IGOs work with NGOs?",
        answer:
          "International governmental organizations (IGOs) work with non-governmental organizations (NGOs) such as Greenpeace, Amnesty International, and Human Rights Watch. NGOs are useful in mobilizing public support, monitoring the transparency of aid, and providing information and expertise.",
      },
      {
        question: "What is World Federalism?",
        answer:
          "World Federalism involves the centralization of political power in the global system. Historical figures such as Dante Alighieri, Jean-Jacques Rousseau, Immanuel Kant, and Woodrow Wilson have advocated for a unified world government as a means to promote peace and justice.",
      },
      {
        question:
          "What are some key writings or figures associated with World Federalism?",
        answer:
          "Dante Alighieri's 'Of Monarchy' (1313), Jean-Jacques Rousseau's emphasis on institutions based on laws, Immanuel Kant's 'On Perpetual Peace' (1795) calling for a world federal state, and Woodrow Wilson's role in advocating for the League of Nations are associated with World Federalism.",
      },
      {
        question: "What is the principle of Collective Security?",
        answer:
          '"An attack on one is an attack on all." Collective Security involves mutual defense among member states. The League of Nations, particularly Articles 10 and 16, reflected this principle (a reason why the U.S. stayed out).',
      },
      {
        question: "What are the principles of International Peacekeeping?",
        answer:
          "International Peacekeeping involves three principles: 1) Consent of the parties; 2) Impartiality; 3) Non-use of force except in self-defense and defense of the mandate.",
      },
      {
        question: "What is Third-Party Dispute Settlement?",
        answer:
          "Third-Party Dispute Settlement includes methods like good offices, mediation, and arbitration. These mechanisms aim to resolve conflicts between states or parties with the help of a neutral third party.",
      },
      {
        question: "What is Functionalism?",
        answer:
          "Functionalism involves the idea of addressing specific functional needs through cooperation. In the context of international organizations, Functionalism is exemplified by the existence of 29 UN specialized agencies, including the World Health Organization (WHO), UNESCO, and the Food and Agriculture Organization (FAO).",
      },
      {
        question: "What are the goals of the United Nations (UN)?",
        answer:
          "The UN aims to maintain peace, uphold human rights, foster friendly relations among nations, achieve international cooperation, ensure sustainable development, protect the environment, provide humanitarian aid, and address global issues.",
      },
      {
        question: "What are the main bodies of the United Nations (UN)?",
        answer:
          "The UN has six main bodies: General Assembly for universal representation and voting on issues, Security Council for peace and security maintenance, and subsidiary bodies including Committees, Peacekeeping Operations, International Courts and Tribunals, and Advisory Bodies like the Peacebuilding Commission (PBC).",
      },
      {
        question: "What are the remaining UN bodies?",
        answer:
          "The remaining UN bodies include the Economic and Social Council (ECOSOC) for coordination on economic, social, and environmental issues; Trusteeship Council for international supervision (suspended since 1994); International Court of Justice for settling legal disputes; and Secretariat, headed by the Secretary-General, responsible for day-to-day UN work and located in various offices worldwide.",
      },
      {
        question: "What are the key issues in UN reform?",
        answer:
          "Key issues in UN reform include debates over world government versus abolishment, transparency and finance reform in the Secretariat, and challenges related to the structure and functioning of the UN Security Council (UNSC), particularly the P5 veto power. The current system, in use for 76 years, is considered by some as anachronistic.",
      },
      {
        question:
          "What are some issues related to the UN's Human Rights Council?",
        answer:
          "The Human Rights Council faces issues related to its membership structure, with 47 seats distributed based on geographical regions. Critics, including the US Ambassador to the UN Nikki Haley, have described the Council as a 'hypocritical and self-serving organization.'",
      },
      {
        question: "Can you provide examples of non-UN IGOs?",
        answer:
          "Examples of non-UN IGOs include OPEC, ASEAN, NATO, the African Union (AU), EU, OAS, Interpol, African Development Bank, and the Asian Development Bank. These organizations may focus on trade, security, international crime, development, and other purposes.",
      },
      {
        question: "What are INGOs and can you provide examples?",
        answer:
          "INGOs (International Non-Governmental Organizations) have non-state-based and usually non-profit memberships, often funded by private sources. There are two types of NGOs: Advocacy NGOs, which aim to influence governments with a specific goal or cause, and Operational NGOs, which provide services and implement development projects. Examples of INGOs include SOS Children's Villages, Oxfam, Catholic Relief Services, Care International, and Lutheran World Relief.",
      },
      {
        question: "What are some reasons for the surge in IGOs and NGOs?",
        answer:
          "The surge in IGOs (International Governmental Organizations) and NGOs (Non-Governmental Organizations) can be attributed to the rise in international contact requiring routine and regulation, growing interdependence, the proliferation of transnational problems such as nuclear issues, environmental concerns, human rights, terrorism, hunger, disease, etc., the failure of the state-centric system, and an increase in transnational political and religious movements.",
      },
    ],
  },
  {
  topic: "Future of IR",
  link: "future-of-ir",
  answerKeys: [
{
    "question": "What is the main concept presented in Samuel Huntington's 'Clash of Civilizations'?",
    "answer": "The main concept is that future conflicts will be along cultural and civilizational lines rather than ideological or economic blocs."
  },
  {
    "question": "Does Huntington agree with the end of ideological rivalry?",
    "answer": "Yes, Huntington does not dispute the end of ideological rivalry."
  },
  {
    "question": "What does Huntington believe will come to blows in future conflicts?",
    "answer": "Huntington believes that civilizations, not ideological or economic blocs, will come to blows in future conflicts."
  },
  {
    "question": "How does Huntington characterize the global conflict according to 'Clash of Civilizations'?",
    "answer": "He characterizes it as West vs the Rest, with civilizations serving as the key actors."
  },
  {
    "question": "What does Huntington suggest provides cohesion among states and creates divisions?",
    "answer": "Civilizational identities, based on history, language, tradition, religion, and culture, provide cohesion among states and create divisions, according to Huntington."
  },
  {
    "question": "What are some examples of civilizations mentioned by Huntington?",
    "answer": "Examples include Hindu, Western, Latin Americans, African, Islamic, Confucian (Sinic), Hindu, Orthodox, Buddhist, and Japanese civilizations."
  },
  {
    "question": "What does Huntington refer to as 'Fault lines'?",
    "answer": "Fault lines are historical tensions and issues between civilizations. For instance, the conflict between Western civilization and Islamic civilization since the 7th century is considered a fault line, rooted in the Moorish conquest of Spain."
  },
  {
    "question": "What are some examples of issues contributing to fault lines mentioned by Huntington?",
    "answer": "Examples include Arab nationalism and Islamic fundamentalism, contributing to tensions between Western and Islamic civilizations."
  },
   {
    "question": "What term did Presidents Mikhail Gorbachev and George H. W. Bush use to define the post-Cold War era?",
    "answer": "They used the term 'New World Order' to define the post-Cold War era."
  },
  {
    "question": "How did Bush describe the spirit of the New World Order?",
    "answer": "He described it as a time of great power cooperation."
  },
  {
    "question": "What did Bush say about the nature of the new world?",
    "answer": "Bush mentioned that the new world is struggling to be born and is quite different from the one they've known."
  },
  {
    "question": "According to Bush, is there a substitute for American leadership?",
    "answer": "No, Bush stated that there is no substitute for American leadership."
  },
  {
    "question": "What term is associated with the idea of a new global order led by the United States?",
    "answer": "The term 'Pax-Americana' is associated with the idea of a new global order led by the United States."
  },
  {
    "question": "What event in 1991 was considered the first test of the New World Order?",
    "answer": "The Gulf War of 1991 was considered the first test of the New World Order."
  },
  {
    "question": "According to Francis Fukuyama, what did the West win in the 20th century?",
    "answer": "In the 20th century, the West won the victory of world economic and political liberalism over absolutism, bolshevism, fascism, communism, etc."
  },
  {
    "question": "What are considered the Western ideas of the most appropriate form of government and livelihood?",
    "answer": "Democracy and capitalism are considered the Western ideas of the most appropriate form of government and livelihood."
  },
  {
    "question": "According to Fukuyama, what is the only viable option for modern society?",
    "answer": "Liberal democracy and market-oriented capitalism are considered the only viable options for modern society, proven to be superior to all other forms."
  },
  {
    "question": "Is economic and political liberalism considered perfect according to Fukuyama?",
    "answer": "No, Fukuyama acknowledges that economic and political liberalism is not perfect, but he believes that the societal ills of Western society can be improved, addressing issues like racism and inequality."
  },
  {
    "question": "What events, such as the Jasmine revolution in Tunisia, Egypt, Libya, and Syria, challenge Fukuyama's idea of history's end?",
    "answer": "Events like the Jasmine revolution in Tunisia, Egypt, Libya, and Syria challenge Fukuyama's idea of history's end, suggesting a resurgence of tyranny, nationalism, terrorism, war, socialism, populism, and a relentless competitive struggle for power under global anarchy."
  },
{
    "question": "What are the simultaneous trends discussed by Benjamin Barber?",
    "answer": "Benjamin Barber discusses the simultaneous trends of Globalization and Fragmentation."
  },
  {
    "question": "What does the term 'McWorld' represent in Barber's analysis?",
    "answer": "'McWorld' represents globalization and corporate dominance in Benjamin Barber's analysis."
  },
  {
    "question": "What is represented by the term 'Jihad' in Barber's analysis?",
    "answer": "'Jihad' represents tradition and traditional values, including extreme nationalism or religious orthodoxy and theocracy, in Benjamin Barber's analysis."
  },
  {
    "question": "What does globalization entail, according to Barber?",
    "answer": "Globalization, as discussed by Barber, involves declining borders, the free flow of goods, capital, people, and ideas. It imposes a different culture, and tribal forces may feel threatened and react."
  },
  {
    "question": "What is meant by 'Fragmentation' in Barber's analysis?",
    "answer": "'Fragmentation' refers to the tribalization of nation-states based on religious, cultural, ethnic, regional, and local factors in Benjamin Barber's analysis."
  },
  {
    "question": "According to Barber, is either globalization or fragmentation conducive to good democracy?",
    "answer": "Neither globalization nor fragmentation is conducive to good democracy, as discussed by Benjamin Barber."
  },
  {
    "question": "What concerns does Barber express about 'McWorld'?",
    "answer": "Barber expresses concerns that too much consumerism associated with 'McWorld' could be detrimental to participatory politics and human rights."
  },
  {
    "question": "Despite its drawbacks, what does Barber suggest is preferable between 'McWorld' and 'Jihad'?",
    "answer": "Despite its drawbacks, Barber suggests that 'McWorld' is still preferable to 'Jihad' as it is more anti-democratic."
  },
  {
    "question": "Can every event be categorized within Huntington's framework?",
    "answer": "Not every event falls neatly into the categories proposed by Huntington."
  },
  {
    "question": "Was the 9/11 attack in 2001 considered Huntingtonian?",
    "answer": "The 9/11 attack in 2001 is often viewed within Huntington's framework, with Osama bin Laden and Al Qaeda representing Islamic forces."
  },
  {
    "question": "What was the Arab Spring, and where did it start?",
    "answer": "The Arab Spring refers to a series of anti-government protests, uprisings, and armed rebellions that spread across much of the Islamic world in the early 2010s. It started with protests in Tunisia."
  },
  {
    "question": "What factors contributed to the Arab Spring?",
    "answer": "The Arab Spring was a response to oppressive regimes and a low standard of living. It began with protests in Tunisia and was notably driven by social media."
  },
  {
    "question": "Is freedom and democracy considered only for the West in the context of the Arab Spring?",
    "answer": "The Arab Spring challenged the perception that freedom and democracy are only for the West, as it involved uprisings and protests in various Islamic countries."
  },
  {
    "question": "Did the Arab Spring continue in 2019, and where did protests occur?",
    "answer": "In 2019, there were multiple uprisings and protest movements in Algeria, Sudan, Iraq, Lebanon, and Egypt, suggesting a continuation of the Arab Spring."
  },
  {
    "question": "What triggered nationwide protests in Iran in September 2022?",
    "answer": "Nationwide protests in Iran in September 2022 were triggered by the death of a 22-year-old, Mahsa Amini, who was arrested for wearing a hijab incorrectly. The protests were against the hardline theocratic rule of the clerics in Iran."
  },
{
    "question": "What were the Millennium Development Goals (MDGs)?",
    "answer": "The Millennium Development Goals (MDGs) were 8 international development goals established following the Millennium Summit of the UN in 2000."
  },
  {
    "question": "What was the deadline for the MDGs?",
    "answer": "The deadline for the MDGs was the year 2015."
  },
  {
    "question": "Name some of the key objectives of the MDGs.",
    "answer": "The key objectives of the MDGs included eradicating extreme poverty and hunger, achieving universal primary education, promoting gender equality, reducing child mortality, improving maternal health, combating HIV/AIDS, malaria, and other diseases, ensuring environmental sustainability, and developing a global partnership for development."
  },
{
    "question": "What is the 2030 Agenda for Sustainable Development?",
    "answer": "The 2030 Agenda for Sustainable Development is a set of 17 aspirational 'Global Goals' with 169 targets."
  },
  {
    "question": "What is the successor to the MDGs?",
    "answer": "The 2030 Agenda for Sustainable Development is the successor to the Millennium Development Goals (MDGs)."
  },
  {
    "question": "Who stated, 'There can be no Plan B, because there is no Planet B'?",
    "answer": "UN Secretary-General Ban Ki-moon stated, 'There can be no Plan B, because there is no Planet B.'"
  },
  {
    "question": "What are some of the focus areas of the Sustainable Development Goals?",
    "answer": "The Sustainable Development Goals include ending poverty and hunger, improving health and education, making cities more sustainable, combating climate change, and protecting oceans and forests."
  },
  {
    "question": "What is the Joint Comprehensive Plan of Action (JCPOA)?",
    "answer": "The JCPOA, or the Iran deal, is an international agreement on the nuclear program of Iran reached in Vienna on 14 July 2015, involving Iran and the P5+1 nations."
  },
  {
    "question": "What commitments did Iran make under the JCPOA?",
    "answer": "Under the JCPOA, Iran agreed to eliminate its stockpile of medium-enriched uranium, reduce its stockpile of low-enriched uranium, and decrease the number of gas centrifuges. Iran also agreed to limit uranium enrichment for a specified period, refrain from building new heavy-water facilities, and convert certain facilities to mitigate proliferation risks."
  },
  {
    "question": "How long is Iran committed to limiting uranium enrichment under the JCPOA?",
    "answer": "Iran committed to limiting uranium enrichment up to 3.67% for 15 years under the JCPOA, with additional restrictions on the type of centrifuges used for 10 years."
  },
  {
    "question": "What monitoring measures are in place to verify Iran's compliance with the JCPOA?",
    "answer": "The International Atomic Energy Agency (IAEA) monitors and verifies Iran's compliance with the JCPOA."
  },
  {
    "question": "What was the incentive provided to Iran in exchange for its commitments under the JCPOA?",
    "answer": "In exchange for its commitments, economic sanctions were lifted from the United States, European Union, and United Nations Security Council."
  },
  {
    "question": "How did Iran respond to the warnings of military options from President Barack Obama?",
    "answer": "Iran mocked President Barack Obama's warnings of military options, calling them 'the joke of the year.' Brigadier General Massoud Jazzayeri dismissed the effectiveness of the 'US options on the table' as a joke among the Iranian nation."
  },
  {
    "question": "According to Obama, what was the intended effect of the Iran nuclear agreement?",
    "answer": "Obama stated that the agreement 'will prevent Iran from building a nuclear weapon for 15 years.'"
  },
  {
    "question": "What criticism does the text mention regarding the Iran nuclear agreement and its impact on nonproliferation policy?",
    "answer": "The agreement is criticized for breaking with decades of consistent, bipartisan nonproliferation policy. This policy, under the NPT, typically restricts states from enriching and reprocessing nuclear materials."
  },
  {
    "question": "What specific limitation does the NPT impose on states regarding nuclear activities?",
    "answer": "Under the NPT, states are generally prohibited from engaging in nuclear enrichment and reprocessing activities."
  },
  {
    "question": "What concern is raised in relation to compliance with the Iran nuclear agreement?",
    "answer": "While compliance is addressed at declared facilities, there is concern that the agreement does not adequately address activities at undeclared sites."
  },
  {
    "question": "How long is Iran supposed to be prevented from building a nuclear weapon according to the agreement?",
    "answer": "According to Obama, the agreement aimed to prevent Iran from building a nuclear weapon for 15 years."
  },
{
    "question": "Why is the JCPOA not considered an official treaty?",
    "answer": "The JCPOA is not considered an official treaty because it was not ratified by the Senate. Instead, it is classified as an executive agreement."
  },
  {
    "question": "What distinguishes the JCPOA as highly unusual?",
    "answer": "The JCPOA is highly unusual for a controversial arms control or non-proliferation agreement, especially given its potential to reshape the balance of power in the Middle East."
  },
  {
    "question": "Why is the JCPOA not legally binding?",
    "answer": "Since it is not a treaty, the JCPOA is not legally binding and stands as a mere political commitment."
  },
  {
    "question": "When did President Trump withdraw from the JCPOA?",
    "answer": "President Trump withdrew from the JCPOA in May 2018."
  },
  {
    "question": "What did President Trump criticize about the deal in relation to financial transactions?",
    "answer": "President Trump criticized the deal for providing Iran with significant financial benefits, including large sums of cash, without perceived tangible returns."
  },
  {
    "question": "What is President Biden's stance on the JCPOA?",
    "answer": "President Biden has made efforts to revive the 2015 nuclear deal, but these efforts have been thwarted as Iran makes new demands. If unsuccessful, Biden has vowed to use the military option to prevent a nuclear-armed Iran."
  },
  {
    "question": "What characterizes the nature of the conflict in the 21st century?",
    "answer": "The conflict in the 21st century is characterized by states being pitted against non-state actors, with no distinct front lines and a lack of differentiation between soldiers and civilians."
  },
  {
    "question": "What are the defining features of unconventional warfare?",
    "answer": "Unconventional warfare involves unconventional tactics and challenges traditional distinctions between soldiers and civilians."
  },
  {
    "question": "How do Afghanistan and Iraq represent a new face of war in the 21st century?",
    "answer": "Afghanistan and Iraq represent a new face of war in the 21st century due to the prevalence of asymmetric warfare, where vastly unequal military strengths are at play, with weaker non-state actors relying on unconventional tactics."
  },
  {
    "question": "Define asymmetric warfare.",
    "answer": "Asymmetric warfare refers to a situation where opposing forces have vastly unequal military strengths, with the weaker non-state actor relying on unconventional tactics to offset the power imbalance."
  },
  {
    "question": "What role has sectarianism played in recent crises?",
    "answer": "Sectarianism has played a significant role in recent crises, with conflicts often characterized by tensions between Sunni and Shia communities."
  },
  {
    "question": "How are Shia often positioned in countries governed by Sunnis?",
    "answer": "In countries governed by Sunnis, Shia tend to make up the poorest sections of society, experiencing discrimination and oppression. Sunni extremists may denounce Shia as heretics."
  },
  {
    "question": "What impact did the Iranian revolution of 1979 have on sectarian dynamics?",
    "answer": "The Iranian revolution of 1979 launched a radical Shia Islamist agenda, challenging conservative Sunni regimes, particularly in the Gulf. This led to increased sectarian tensions."
  },
  {
    "question": "How do conflicts in the region often manifest sectarian divisions?",
    "answer": "Many conflicts in the region have strong sectarian overtones, such as in Syria, where Shia militias supported by Iran battle Sunni-dominated opposition. Sunni jihadist groups, including Islamic State (IS), target Shia and their places of worship in Syria and Iraq."
  },
  {
    "question": "Who are the Sunnis?",
    "answer": "The majority of the world's Muslims, around 85-90%, are Sunnis. In the Middle East, countries like Egypt, Jordan, and Saudi Arabia have Sunni majorities."
  },
  {
    "question": "How do Sunnis view themselves?",
    "answer": "Sunnis regard themselves as the orthodox branch of Islam. The name 'Sunni' is derived from the phrase 'Ahl al-Sunnah' or 'People of the Tradition,' emphasizing practices based on what Prophet Muhammad said, did, agreed to, or condemned."
  },
  {
    "question": "Who are the Shia?",
    "answer": "Shia constitute about 10% of all Muslims, with a global population estimated at 150-200 million. Shia majorities are found in countries like Iran, Iraq, Bahrain, Azerbaijan, and Yemen, with significant communities in other nations."
  },
  {
    "question": "What historical figure is central to Shia identity?",
    "answer": "In early Islamic history, Shia was a movement known as 'Shiat Ali' or the 'Party of Ali.' Ali, the cousin and son-in-law of Prophet Muhammad, is considered by Shia Muslims as the rightful successor (imam) following the Prophet's death in 632."
  },
  {
    "question": "What were the factors leading to the Iran–Iraq War (1980-1988)?",
    "answer": "Iraq was concerned that the 1979 Iranian Revolution would incite its Shi'ite majority to rebel. Border disputes and Iraq's plan to annex the oil-rich area also contributed to the conflict."
  },
  {
    "question": "What are the objectives of terrorism?",
    "answer": "Terrorism has agitational objectives, promoting dissident groups, advertising agendas, and discrediting rivals. It can also have coercive objectives, aiming to disorient the target group, inflate the perceived power of the dissident group, and provoke overreactions from the government to adopt repressive policies. Additionally, terrorism may serve organizational objectives, such as acquiring resources, maintaining group cohesion, and ensuring allegiance."
  },
  {
    "question": "What are examples of agitational objectives in terrorism?",
    "answer": "Agitational objectives include promoting dissident groups based on anti-colonialism, separatism (e.g., ETA - Basque Homeland and Liberty), religious beliefs (Islamic Jihad), or secular ideologies (e.g., Japanese Red Army)."
  },
  {
    "question": "How is coercive objective related to terrorism?",
    "answer": "The coercive objective of terrorism involves disorienting the target group, inflating the perceived power of the dissident group, and provoking overreactions from the government. The goal is to compel the government to adopt repressive policies that may play into the hands of the terrorists."
  },
  {
    "question": "What is the organizational objective of terrorism?",
    "answer": "The organizational objective of terrorism includes acquiring resources, maintaining group cohesion, and ensuring allegiance. The high initiation costs associated with violent acts can decrease the chances of group defection."
  },
  {
    "question": "How did the United Nations Secretary General define terrorism in 2004?",
    "answer": "In November 2004, a United Nations Secretary General report described terrorism as any act 'intended to cause death or serious bodily harm to civilians or non-combatants with the purpose of intimidating a population or compelling a government or an international organization to do or abstain from doing any act.'"
  },
  {
    "question": "What is the meaning of the Arabic word 'jihād'?",
    "answer": "In Arabic, the word 'jihād' translates as a 'struggle.'"
  },
  {
    "question": "How is jihad defined in Islam?",
    "answer": "Jihad is a religious duty of Muslims, meaning 'to struggle in the way of Allah.' It is considered an important religious duty, and a person engaged in jihad is called a mujahid, with the plural being mujahideen."
  },
  {
    "question": "What are the two commonly accepted meanings of jihad?",
    "answer": "The two commonly accepted meanings of jihad are the 'greater jihad,' which is the inner struggle by a believer to fulfill religious duties, and the 'lesser jihad,' which is the physical struggle against the enemies of Islam."
  },
  {
    "question": "What is the 'greater jihad' in Islam?",
    "answer": "The 'greater jihad' is the inner struggle by a believer to fulfill his religious duties."
  },
  {
    "question": "What is the 'lesser jihad' in Islam?",
    "answer": "The 'lesser jihad' is the physical struggle against the enemies of Islam. Some proponents of the violent form of jihad translate it as 'holy war.'"
  },
  {
    "question": "What does the term 'Mujahideen' mean?",
    "answer": "Mujahideen means Muslims who struggle in the path of Allah."
  },
  {
    "question": "How has the term 'Mujahideen' been associated by the West?",
    "answer": "The term 'Mujahideen' has been most closely associated by the West with radical Islam, encompassing several militant groups and struggles."
  },
  {
    "question": "When was the term 'Mujahideen' first used by the West?",
    "answer": "The term 'Mujahideen' was first used by the West to describe the mountainous sect of hillmen in Afghanistan who fought against British control."
  },
  {
    "question": "When was the Muslim Brotherhood founded?",
    "answer": "The Muslim Brotherhood was founded in Egypt in 1928."
  },
  {
    "question": "What were the initial activities of the Muslim Brotherhood?",
    "answer": "The Muslim Brotherhood started as a religious social organization, engaging in activities such as preaching Islam, teaching the illiterate, setting up hospitals, and launching commercial enterprises."
  },
  {
    "question": "When did the Muslim Brotherhood become the first democratically elected political party in Egypt?",
    "answer": "In 2012, the Muslim Brotherhood became the first democratically elected political party in Egypt."
  },
  {
    "question": "Which countries consider the Muslim Brotherhood a terrorist organization?",
    "answer": "The governments of Bahrain, Egypt, Russia, Syria, Saudi Arabia, and the United Arab Emirates consider the Muslim Brotherhood a terrorist organization."
  },
  {
    "question": "What is the stated goal of the Muslim Brotherhood?",
    "answer": "The Muslim Brotherhood's stated goal is to instill the Qur'an and Sunnah as the 'sole reference point for ordering the life of the Muslim family, individual, community, and state.'"
  },
  {
    "question": "Who became Egypt's first democratically elected President from the Muslim Brotherhood?",
    "answer": "Mohamed Morsi became Egypt's first democratically elected President from the Muslim Brotherhood in 2012."
  },
  {
    "question": "What happened on July 3, 2013, related to the Muslim Brotherhood in Egypt?",
    "answer": "On July 3, 2013, Mohamed Morsi, the President from the Muslim Brotherhood, was overthrown by the military in response to civil unrest across the country."
  },
  {
    "question": "What does the name 'Hezbollah' mean?",
    "answer": "Hezbollah means 'Party of God.'"
  },
  {
    "question": "What type of group is Hezbollah?",
    "answer": "Hezbollah is a Shi'a Muslim militant group and political party based in Lebanon."
  },
  {
    "question": "Which countries provide financial and political support to Hezbollah?",
    "answer": "Hezbollah receives financial and political support from Iran and Syria."
  },
  {
    "question": "When did Hezbollah first emerge?",
    "answer": "Hezbollah first emerged in response to the 1982 Israeli invasion of Lebanon during the Lebanese civil war."
  },
  {
    "question": "Who inspired the leaders of Hezbollah?",
    "answer": "The leaders of Hezbollah were inspired by Ayatollah Khomeini."
  },
  {
    "question": "Who trained and organized Hezbollah initially?",
    "answer": "Hezbollah was trained and organized by a contingent of Iranian Revolutionary Guards."
  },
  {
    "question": "What is one of Hezbollah's goals according to its 1985 manifesto?",
    "answer": "One of Hezbollah's goals, according to its 1985 manifesto, is the destruction of the state of Israel."
  },
  {
    "question": "What is the goal of the Palestinian Islamic Jihad?",
    "answer": "The Palestinian Islamic Jihad was created to prevent Israel from occupying Palestinian territories and fight for the sovereignty of Palestine."
  },
  {
    "question": "When was the Palestinian Islamic Jihad founded?",
    "answer": "The Palestinian Islamic Jihad was inspired by the 1979 Iranian Revolution and founded to fight for the sovereignty of Palestine. It operated out of Egypt until 1981, after which it was exiled due to the assassination of President Anwar Sadat. The group continued its work in Gaza until it was exiled to Lebanon in 1987."
  },
  {
    "question": "Where did the Palestinian Islamic Jihad move to in 1989?",
    "answer": "In 1989, the Palestinian Islamic Jihad moved to Damascus."
  },
  {
    "question": "Which terrorist group provided support to the Palestinian Islamic Jihad?",
    "answer": "The Palestinian Islamic Jihad received support from Hezbollah."
  },
  {
    "question": "Where is the Palestinian Islamic Jihad primarily active?",
    "answer": "The Palestinian Islamic Jihad is primarily active in the West Bank and Gaza Strip."
  },
  { 
    "question": "What is the goal of Hamas?",
    "answer": "Hamas aims to liberate Palestine from Israel and establish an Islamic state in the area that includes Israel, the West Bank, and the Gaza Strip."
  },
  {
    "question": "When was Hamas founded?",
    "answer": "Hamas was founded in 1987 during the First Intifada as an offshoot of the Egyptian Muslim Brotherhood."
  },
  {
    "question": "Which part of the Palestinian Territories does Hamas govern?",
    "answer": "Since June 2007, Hamas has governed the Gaza portion of the Palestinian Territories."
  },
  {
    "question": "How is Hamas recognized in the West?",
    "answer": "Hamas is recognized in the West as a terrorist organization."
  },
  {
    "question": "Who founded Al Qaeda?",
    "answer": "Al Qaeda was founded in the late 1980s by Osama bin Laden and Muhammad Atef."
  },
  {
    "question": "What does Al-Qaeda call for?",
    "answer": "Al-Qaeda calls for the use of violence and force to bring about the end of non-Islamic governments and aims to drive the US armed forces out of Saudi Arabia and Somalia."
  },
  {
    "question": "What major attacks is Al Qaeda responsible for?",
    "answer": "Al-Qaeda is responsible for the attack on the World Trade Center and the Pentagon on September 11, 2001, as well as an attack on the US Embassy in Nairobi, Kenya."
  },
  {
    "question": "When was Osama bin Laden killed?",
    "answer": "Osama bin Laden was killed on May 2, 2011, by the US Navy."
  },
  {
    "question": "What is the Islamic State of Iraq and the Levant (ISIL)?",
    "answer": "The Islamic State of Iraq and the Levant (ISIL) is an Islamic extremist group that proclaimed itself a worldwide caliphate in 2014, with Abu Bakr al-Baghdadi named as its caliph. It claims religious, political, and military authority over all Muslims worldwide."
  },
  {
    "question": "When was Abu Bakr al-Baghdadi killed?",
    "answer": "Abu Bakr al-Baghdadi was killed on October 27, 2019, by US Delta Force in Syria's northwestern Idlib Province."
  },
  {
    "question": "What did President Trump say about ISIS?",
    "answer": "President Trump stated that ISIS was defeated. The US also initiated a troop pullout from Syria."
  },
  {
    "question": "Is China considered an 'existential threat'?",
    "answer": "China is sometimes considered an 'existential threat' due to its large population, being the world's second-largest economy, and geopolitical concerns."
  },
  {
    "question": "What did President Xi Jinping call for in his 2013 meeting with President Obama?",
    "answer": "President Xi Jinping called for a 'new kind of great power relations' in his 2013 meeting with President Obama."
  },
  {
    "question": "What is China's Air Defense Identification Zone (ADIZ) in the East China Sea/Yellow Sea?",
    "answer": "China declared the Air Defense Identification Zone (ADIZ) in the East China Sea/Yellow Sea, leading to tensions, including a naval standoff against the U.S. Navy cruiser Cowpens."
  },
  {
    "question": "What are some territorial disputes involving China?",
    "answer": "China has territorial disputes over the Senkaku/Diaoyutai islands with Japan and the Spratly islands, Paracel islands, and Scarborough shoals with Southeast Asian neighbors (Vietnam, Malaysia, Philippines, Brunei, and Taiwan)."
  },
  {
    "question": "What is China's stance on THAAD?",
    "answer": "China opposes THAAD (Terminal High Altitude Area Defense) and has expressed strong opposition to its deployment, especially in South Korea."
  },
  {
    "question": "What is China's economic status in terms of GDP?",
    "answer": "China has a GDP of over US$14 trillion, making it the world's second-largest economy."
  },
  {
    "question": "What is the amount of China's foreign reserves?",
    "answer": "China has over US$3 trillion in foreign reserves."
  },
  {
    "question": "How much of the US national debt does China hold in US Treasury securities?",
    "answer": "China holds over US$1.08 trillion of US Treasury securities, which is approximately 4% of the $25.8 trillion US national debt."
  },
  {
    "question": "What is China's trade surplus?",
    "answer": "China has a trade surplus of over US$400 billion."
  },
  {
    "question": "What is the status of China's military power?",
    "answer": "China has military capabilities including the 1st aircraft carrier Liaoning, a military budget over US$180 billion, strategic submarines, nuclear subs, battleships, and naval power projection."
  },
  {
    "question": "What is China's stance on surpassing the US military capacity?",
    "answer": "China constantly professes the need to surpass the US military capacity."
  },
  {
    "question": "What is the Nine-Dashed Line concept?",
    "answer": "The Nine-Dashed Line is a demarcation line used by both the People's Republic of China (PRC) and the Republic of China (ROC) in their territorial claims in the South China Sea."
  },
  {
    "question": "Which islands are included in the Nine-Dashed Line claim?",
    "answer": "The Nine-Dashed Line includes islands such as the Paracel Islands (occupied by China but claimed by Vietnam) and the Spratly Islands, which are disputed by the Philippines, China, Brunei, Malaysia, Taiwan, and Vietnam."
  },
  {
    "question": "What are some of the potential resources in the South China Sea claimed under the Nine-Dashed Line?",
    "answer": "The South China Sea, within the Nine-Dashed Line, is believed to have vast mineral resources, including oil."
  },
  {
    "question": "When did the Nine-Dashed Line concept first appear?",
    "answer": "The concept first appeared in 1948 as the 'Eleven-Dotted U-shape Line' when announced by the Kuomintang (KMT). The People's Republic of China (PRC) later revised it to the 'Nine-Dashed Line.' The Republic of China (ROC) adopted this line and its rationale for claims over the Spratly and Paracel Islands."
  },
{
    "question": "What is the pattern of North Korean provocations related to missile launches and nuclear tests?",
    "answer": "North Korea has a pattern of provocations that typically involve missile launches preceding nuclear tests. For example, the Taepodong-2 launch on July 5 (first test on October 9, 2006), Kwangmyongsong-2 launch on April 5 (second test on May 25, 2009), and Eunha-3 launch on December 12 (third test on February 12, 2013)."
  },
  {
    "question": "What significant missile launches did North Korea conduct in 2017?",
    "answer": "In 2017, North Korea launched the 10,000 km range Hwasong-14/KN-20 ICBM on July 4 and 28, and the larger, 13,000 km range Hwasong-15/KN-22 ICBM on November 28. Additionally, the Hwasong-15 was launched on November 3, 2022, and the larger Hwasong-17 on November 18, 2022."
  },
  {
    "question": "What is the typical relationship between North Korean missile launches and nuclear tests?",
    "answer": "Missile launches by North Korea typically precede nuclear tests."
  },
  {
    "question": "How many missile launches did North Korea conduct in 2022?",
    "answer": "In 2022 alone, North Korea conducted over 80 missile launches."
  },
  {
    "question": "What is North Korea's status regarding chemical weapons?",
    "answer": "North Korea possesses a substantial arsenal of chemical weapons, with indigenous technology to produce nerve, blister, blood, and choking agents. These include sarin, phosgene, tabun, adamsite, prussic, and mustard gas. North Korea is not a signatory to the Chemical Weapons Convention."
  },
  {
    "question": "How many industrial facilities with chemical stockpiles does North Korea have?",
    "answer": "North Korea is estimated to have at least 8 industrial facilities with a chemical stockpile, with estimates running as high as 2,500 to 5,000 tons."
  },
  {
    "question": "What is North Korea's status regarding the Biological Weapons Convention?",
    "answer": "North Korea is a signatory to the Biological Weapons Convention, but since 1980, it has accelerated biological weapons development. Anthrax, plague, and yellow fever are expected to be employed by North Korea in water and food supplies."
  },
  {
    "question": "What is the size of North Korea's army?",
    "answer": "North Korea has the 4th largest army in the world, with 1,106,000 active personnel and an additional 8.2 million in reserve."
  },
  {
    "question": "What are the key components of North Korea's military, including land-based weapons?",
    "answer": "North Korea's military includes over 1,650 land-based weapons, 3,500 tanks, 3,500 towed artillery, and 11,000 anti-aircraft weapons, among others."
  },
  {
    "question": "What is the size and capability of North Korea's air force (KPAF)?",
    "answer": "The Korean People's Army Air Force (KPAF) has 110,000 personnel and 1,700-1,800 aircraft, including 612 helicopters."
  },
  {
    "question": "What is the size and capability of North Korea's navy (KPN)?",
    "answer": "The Korean People's Navy (KPN) has 46,000 personnel and over 700 ships, landing, and infiltration crafts, including nearly 100 submarines."
  },
  {
    "question": "When did the 6-party talks begin and which country hosted them?",
    "answer": "The 6-party talks began in August 2003 and were hosted by China."
  },
  {
    "question": "What principle was laid down in the 4th Round of the talks on September 19, 2005?",
    "answer": "The 'actions for actions' principle was laid down in the 4th Round, where North Korea agreed to abandon its nuclear weapons program in exchange for diplomatic, economic, and energy concessions, including 2 million kilowatts of energy."
  },
  {
    "question": "What event in October 2006 led to the UNSC Resolution 1718?",
    "answer": "A nuclear test by North Korea in October 2006, possibly in response to frozen North Korean assets in Banco Delta Asia (BDA), led to the adoption of UNSC Resolution 1718. This resolution enforced economic sanctions, including restrictions on luxury items."
  },
  {
    "question": "What was the '2.13 Agreement' and when did it result?",
    "answer": "The '2.13 Agreement' resulted from the 3rd phase of the 5th Round of talks. It involved the shutdown and sealing of the Yongbyon facilities in exchange for heavy fuel oil (500,000 tons per year) and the lifting of financial sanctions on Banco Delta Asia assets."
  },
  {
    "question": "What did North Korea agree to in the 2nd phase of the 6th Round on September 30, 2007?",
    "answer": "In the 2nd phase of the 6th Round, North Korea agreed to 'disable' facilities in Yongbyon, including the 5 MW reactor, reprocessing plant, and fuel rod facility. In return, North Korea would be lifted from the U.S. list of states sponsoring terrorism, and the application of the Trading with the Enemy Act by the U.S. would be terminated."
  },
  {
    "question": "What event in April 2009 drew criticism from the U.S. and the UNSC?",
    "answer": "In April 2009, North Korea launched the Taepodong 2 intercontinental ballistic missile (ICBM), drawing criticism from the United States and the United Nations Security Council (UNSC)."
  },
  {
    "question": "What announcement did North Korea make on April 14th, 2009, regarding the six-party talks?",
    "answer": "On April 14th, 2009, North Korea stated that it would 'never again take part in the six-party talks.'"
  },
  {
    "question": "What actions did North Korea take after its announcement in April 2009?",
    "answer": "Following its announcement, North Korea expelled IAEA inspectors and resumed its nuclear weapons program."
  },
  {
    "question": "What significant event occurred on May 25, 2009, and what was its consequence?",
    "answer": "On May 25, 2009, North Korea conducted its second nuclear test, leading to UNSC Resolution 1874 and the indefinite termination of the six-party talks."
  },
  {
    "question": "What is the current state of East Asia?",
    "answer": "East Asia is in a state of flux."
  },
  {
    "question": "What are the key considerations for Korea's future?",
    "answer": "Korea is at a crossroad, with questions about the possibility of North Korea collapsing, the potential for a reunified Korea, and concerns about the prospect of another war."
  },
  {
    "question": "What historical mistake involving Japan is mentioned?",
    "answer": "The question is raised about whether Japan will choose to repeat the mistake it made a century ago."
  },
  {
    "question": "What is the potential role of China in the region, and what possibilities are mentioned?",
    "answer": "The question is posed about whether China can become a genuine G2 leader – responsible, open, and non-threatening, transforming into a soft power. Alternatively, it questions if China will return to the Middle Kingdom ways of Sino-centrism."
  },
  {
    "question": "What role is the U.S. expected to play in the region amid changes?",
    "answer": "There is speculation about whether the U.S. is destined to continue playing a major role in the region despite changes. Additionally, there is consideration of whether Korean unification could trigger a broader U.S. pullback and a return to traditional isolationism, noting Trump’s inclination to pull out."
  }
  ]
  }
];
