---
title: "Part 3: The Duhem-Quine Thesis and Underdetermination"
date: 2025-09-09
hero: images/philosophy_of_science/phi_of_sci_part3.jpg
description: Part 3
theme: Toha
menu:
  sidebar:
    name: |
        3: Underdetermination
    identifier: philo-science-part3
    parent: philo-science-category
    weight: 13
---


This article is about part 3 of the anthology [Philosophy of Science: Central Issues (1998)](https://philpapers.org/rec/CURPOS). This part revolves around the principle of underdetermination, and the related formulations of influential philosophers such as Pierre Duhem and Willard V. O. Quine. In short, underdetermination embodies the idea, that a given body of evidence cannot uniquely determine which theories and beliefs we should espouse. This idea was already mentioned in the [previous article about part 2](https://fabian-zimmer.github.io/posts/philosophy_of_science/part2/), but will be thoroughly explained in this article.

### What Experiments Can and Cannot Do.

When studying the scientific literature, especially textbooks of a certain subject, we may encounter the idea of a "critical" or "crucial" experiment. An experiment that, in one stroke of demonstration, supposedly decides between two contender theories in an unequivocal manner, validating only one while invalidating the other. The clean and certain nature of such experiments appeal to our naive beliefs we may, at the initial exposures of our psyche to science and the philosophy thereof, hold with regard to such topics. The previous articles so far hopefully completely disabused the reader of such notions in the theoretical and methodological aspects of science, and this article aims to do the same with regard to the experimental side.

An apt example of such a "crucial" experiment would be the measurements of the speed of light in air and water by Léon Foucault in 1853 as part of his dissertation. Around that time, one theory that explained the refraction of light in a medium (such as water) was the corpuscular theory of light as formulated by Newton through his work in optics, wherein light was made of small particles called "corpuscles". The only thing of importance of this theory for us here, is that it predicted light to have a larger velocity in water than in air, whereas the newly emerging wave theories of light predicted the opposite. A perfect situation for a crucial experiment. The last sentence of Foucault's thesis[^1] captures the conclusion of his work succinctly:

> "La conclusion dernière de ce travail consiste donc à déclarer le systeme de l'émission *incompatible* avec la réalité des faits."

It translates to "The final conclusion of this work consists thus in declaring the emission system *incompatible* with the reality of the facts." Emission system here means the corpuscular theory of light. Importantly for us, the whole theory was, with one experiment, seen as invalidated. 

A century later, Pierre Duhem in his [Physical Theory and Experiment (1954)](https://doi.org/10.2307/j.ctv1nj34vm.16) (chapter VI of linked work) shows the impossibility of such a grand conclusion. Duhem starts by explaining that every theory is a bundle of hypotheses. To test and attempt to refute a single one via experiments is impossible, as it is always connected to an ensemble of auxiliary hypotheses. For example, Newton's universal law of gravitation relies upon many, one may say hidden, assumptions and auxiliary statements such as the conservation of mass, the perennial magnitude of his gravitational constant, the theories allowing for the interpretation of the planetary data gathered by the measurement devices like telescopes and clocks, and so on. It would be an enormous task to list them all, if that is at all possible. 

The only thing an observation or experiment can then put into question is the whole bundle of hypotheses, showing that all together may be in jeopardy. The arrow of *modus tollens* is simply incapable of pinpointing the erroneous piece. In other words, there is ambiguity in the falsification provided by observations. Using formal logical notation and labeling the single hypothesis (or theory), an observation, and auxiliary hypotheses with $T, O$ and $A$, respectively, we can show Duhem's idea that a single hypothesis cannot alone predict anything as:
<p>
$$D1 \quad \sim (T \rightarrow O_1) \, , \, {\rm but \, rather}$$
</p>
<p>
$$D2 \quad (T \,\&\, A_1 \,\&\, ... \,\&\, A_n) \rightarrow O_1 \, .$$
</p>
From these, Duhem's thesis about the ambiguity of falsification logically follows:
<p>
$$D3 \quad \sim (\sim O_1 \rightarrow \, \sim T) \, , \, {\rm but \, instead}$$
</p>
<p>
$$D4 \quad \sim O_1 \rightarrow \, \sim (T \,\&\, A_1 \,\&\, ... \,\&\, A_n) \, .$$
</p>
In other words, not observing the prediction ($\sim O_1$) can only criticise an intricately woven together hypothesis bundle. Foucault's experiment only criticised the portion of statements of corpuscular theory that entailed the light velocity to be higher in the medium, never the whole theory that also predicted some other phenomena quite adequately. 

Duhem compares this situation to mathematics, showing that in physics the theories $T$ and $\sim T$ are not logically exhaustive like in mathematics, where showing the truth of one is to disprove the other. In physics, the alternative to a theory $T$ is not $\sim T$ but rather some of the many possible rival theories $T^*$, such that we have his final statement formalised as:
<p>
$$D5 \quad \sim (\sim T \rightarrow T^*) \, .$$
</p>
It is not the case, that providing strong evidence against one theory is to validate a rival hypothesis.

His work was timely, as around his time Henri Poincaré and others advocated the doctrine of conventionalism, which states that many fundamental postulates of physics are definitions adopted by convention, and as such cannot be refuted by any experiment or observation. For example, Newton's first law, when taken in isolation, cannot be compared with experience and tested in experiments in a direct manner, so the claim. Duhem did not believe in this, using his holist thesis to argue, that although one cannot in principle refute individual hypotheses, experiments can put a whole system of hypotheses (a physical theory) into question and thereby also the individual hypothesis. The acceptance of a rival theory then, in a way, refutes the old postulates (albeit indirectly). As we can see now, history shows that he was right, in a way, as relativity theory overthrew (in certain regimes and on certain scales) Newtonian mechanics, effectively refuting "definitions" within it. 

The only lurking problem in all of this, is that you could use these arguments to forever cling to your favorite theory, always providing yet another auxiliary hypothesis to mend and save the theory if evidence grows against it. For this, Duhem only appealed to what he called "good sense" (or common sense), which makes one abandon a theory eventually. Below we will see another philosopher enlighten us on this issue.

### The Reach of Refutations

A similar but stronger idea was given by W. V. O. Quine in his [Two Dogmas of Empiricism (1953)](https://philpapers.org/rec/QUITDO-3), where he argues that an attempt at refutation of a single statement actually affects the complete contemporary body of scientific knowledge. Quine saw science as a man-made field whose boundary conditions are experiences. All statements are logically interconnected and none is immune to revision if there's conflict with experience. His arguments rely on a sophisticated understanding of analytic and synthetic statements, whose explanations go beyond the scope of this article. Suffice it to say, what he saw as being criticised by observation and experiment, which he called "The unit of empirical significance", he believed "is the whole of science".

To extend the scope to this ultimate limit was deemed untenable by Donald Gillies when he wrote [The Duhem Thesis and the Quine Thesis (1993)](https://philpapers.org/rec/GILPOS-3) (chapter 5 of the linked work). In short, he advocates that this "unit of empirical significance" can be an intermediate-sized theoretical package, more than a individual hypothesis or statement (where he agrees with Quine, and Duhem for that matter, that isolated ones cannot be tested alone) but less than the whole contemporary body of scientific knowledge. To see why this is more reasonable, he recalls the predictions about the existence of Neptune by Urbain Le Verrier and John Couch Adams, which certainly did not involve assumptions about bee behavior in the production of honey, as he (perhaps) humorously mentions.

Gillies also shows the relevancy of Duhem's thesis by illustrating the historical discrepancy between theoretical and observed orbits of Uranus and Mercury. In the first case, the postulation of another planet (Neptune) was correct, whereas for the second case the proposed planet Vulcan was not discovered, and Einstein's theory was the next step. Both cases show similar observational anomalies, but one led to altering an auxiliary hypothesis (number of planets) and the other to altering a more comprehensive set of statements that comprises a theory.

### Underdetermination: Gruesome or Hyperbolized?

It seems that a stance that can be adopted and defended by arguments as described above, is one in which "It is rational to hold onto any theory in the face of any evidence.", as Quine succinctly put it. This notion of underdetermination is misused (and even abused) to justify whatever relativist conclusions one fancies, and to mount attacks against epistemology. 

Within [Demystifying Underdetermination (1990)](https://hdl.handle.net/11299/185722), Larry Laudan walks us though the trivialities and inconsistencies that were generally employed by his contemporary thinkers when it came to underdetermination. To better understand what follow, it is useful to quickly go over some forms of logic. Although there may only be superficial agreement with regard to the exact taxonomy, one can at least make a simple distinction between deductive and non-deductive logical processes.

For deduction, the conclusions follow logically from the premises, and are true if the premises are considered true. A simple example is if the premises are "All species evolved." and "Humans are a species.", then a deductive conclusion is "Therefore, humans evolved.".

A broad realm of non-deductive reasoning is captured by the term induction, where from a body of data a general statement is inferred that aims to be valid beyond the scope of the observations that support it. It does not establish a certainty, but rather yields statements with a probability of being true (dependent on the nature of the data and the theory of assigning probabilities). Another form of non-deductive logic is abduction, where the "best and most simple" hypothesis (or cause in this case) is inferred from a given observation, as used for example in the board game [Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)). Again, the conclusion is not a certainty, but simply a suitable one that provides grounds for further orientation and decision-making. The last two, and more generally any non-deductive reasoning, fall under the umbrella term of ampliative logic.

To begin with, Laudan differentiates between two types of underdetermination. Both have sometimes been used as **the** thesis of underdetermination in the vast literature on the topic. The first, which he calls *Humean underdetermination* (HUD) amounts to (a variant of) the following claim: 
	"For any finite body of evidence, there are indefinitely many mutually contrary theories, each of which logically entails that evidence." 
Although this may sound threatening to science, it is rather weak in two key respects: (i) it is only applicable to deduction and not to the broader class of ampliative logic, and (ii) it doesn’t say that **all** theories are reconcilable with any given body of evidence, just "indefinitely" many, and it also doesn’t assert that all these rival theories are equally belief-worthy, or equally rational to accept. It simply tells us, that theories (and whether they're true) cannot be deduced from the phenomena, making deductive reasoning alone insufficient, which all has been increasingly accepted since the time after Newton.

The much stronger thesis to be found, Laudan calls *Quinean underdetermination* (QUD) and defines it as:
	"Any theory can be reconciled with any recalcitrant evidence by making suitable adjustments in our other assumptions about nature."
According to this, a theory can be made logically compatible with the refuting evidence, or further be made to function in a logical derivation of the former refuting evidence. However, the crucial concept which all types of underdetermination fall short to address properly is rationality: no such thesis or notion says anything convincing as to whether a theory, which is being saved from refuting evidence, is then still rationally acceptable.

We can suppose that the rational character of a theory could be shown to exist, if the theory (or system it is embedded in) may:
1. be logically compatible with the evidence;
2. logically entail the evidence;
3. explain the evidence;
4. be empirically supported by the evidence.
Although the act of abandoning auxiliary hypotheses of a theory that link to the recalcitrant evidence can trivially satisfy the 1st point, it is by no means guaranteed, that the loss of predictive and explanatory power, as well as empirical support that existed presumably precisely because of these auxiliaries, can be restored easily with alternatives to again satisfy the 2nd, 3rd and 4th points to a sufficient degree.

The true threat to the epistemological project would be ampliative underdetermination in the form of strong egalitarian versions like the QUD. For if these were put into strongly convincing terms, they would, to put it frighteningly, put the flat-earth and the oblate-spheroid hypotheses on equal rational grounds. Kuhn’s version of this would be to hold on to a paradigm come what may. His arguments for this egalitarian claim are, to put it briefly, based on the ambiguous nature of how individuals interpret shared standards. But as we have seen in the previous article, these supposedly deciding factors are rather "unargued dogma" and "if one takes away that dogma, much of the surrounding edifice collapses", as Laudan now puts it.

A famous example that shows up in such discussions is Nelson Goodman's grue/green situation. An object is grue only if observed to be green before time $T$, or else it is not observed before time $T$ and is blue. Then, after randomly sampling a pack of emeralds for a while, the hypotheses "all emeralds are green" and "all emeralds are grue" are both equally well supported by our evidence so far, if we pick the time $T$ to lie far in the future. However, and again crucially, whether they are equally belief worthy is usually swept under the rug. One also cannot, as has historically been the case, extrapolate from this example to a global scope and claim the straight rule of inductive inference to never favor a theory unambiguously. In essence, cases where underdetermination may seem relevant (e.g. situations where the number of confirming instances are shared across theories) turn out to be only finely tuned situations of larger, more elaborate wholes (and in Laudan's words are then "boring trivialities"), where these wholes are meant as the more complex scientific dilemmas in the real world.

### The Realm of the Rational

Finally, Laudan criticises people that argued for such an egalitarian thesis and claiming underdetermination leading to theory choices being based on "non-logical", "extra-empirical", or "social" factors. He wittingly reveals the hidden, and simply untenable assumption that leads to such conclusions, namely that formal logic exhausts the realm of the rational. One needs only to realise the many forms that fall under ampliative logic (and its uses as mentioned throughout this article) to convince oneself that there is more to human rationality than simple formalisable statements.

It is also this binary thinking — everything is either formal logic or sociology — that paints scientists as irrational. It can be found on many occasions throughout history, that scientists (i) changed their mind even in absence of evidence that would seem to force them to, and (ii) clung on to theories even when confronted by (what appeared to be) refuting new evidence. These two facts together haven been misused to argue that scientists can **reasonably** decide when to change or not change their beliefs, irrespective of what they are coming to learn about the world. However, this would be exactly the same as claiming that, because surgery is not always necessary to cure gall stones, nor always sufficient to cure them, it follows that surgery is never the appropriate treatment of choice for gall stones — a nonsensical conclusion. 

The only thing that can be granted to underdetermination postulates is their applicability to logical relations between certain statements. However, they are wholly distinct from, and cannot be used as proof of, any causal interconnections going on in the minds of scientists that presumably (and probably only partially) determine their choices. In Laudan's words "normative matters of logic and methodology need to be sharply distinguished from empirical questions about the causes of scientific belief." In other words, the normative underdetermination as perhaps valid to a theory has nothing to say as to whether a scientist's belief in that theory is causally underdetermined (and vice versa).

For more than a century now, the inquisitive spirit of philosophy has turned its attention to the topic of underdetermination. What gradually became clearer is that the arguments cannot be used to undermine science as a venture, and utterly lack power to lay any claims to the decision-making processes associated to the inner life of scientists. Luckily for humanity('s scientific enterprise), there seems to exist no firmly established, rationally bolstered underdetermination thesis that has the capacity to seriously put in questions our efforts to develop scientific methodology.

[^1]: See ["Sur les vitesses relatives de la lumière dans l'air et dans l'eau", Léon Foucault (1853)](https://catalog.hathitrust.org/Record/011615476)