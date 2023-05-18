import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "@/components/card/card";
import { QuestionText } from "@/components/question-text/question-text";
import {
  countNumberOfVowels,
  getNthFibonacciNumber,
  isPalindrome,
} from "@/utils/functions";
import { AnswerText } from "@/components/answer-text/answer-text";
import { HeadingText } from "@/components/heading-text/heading-text";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/pools-logo.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <HeadingText>Front End Technical Test</HeadingText>
      <div className={styles.cardContainer}>
        <Card>
          <QuestionText>
            Create a function that returns the number of vowels in a passed
            string
          </QuestionText>
          <AnswerText>
            &quot;Challenge&quot; has {countNumberOfVowels("Challenge")} vowels
          </AnswerText>
          <AnswerText>
            &quot;Supercalifragilisticexpialidocious&quot; has{" "}
            {countNumberOfVowels("Supercalifragilisticexpialidocious")} vowels
          </AnswerText>
          <AnswerText>
            &quot;I love writing code&quot; has{" "}
            {countNumberOfVowels("I love writing code")} vowels
          </AnswerText>
        </Card>
        <Card>
          <QuestionText>
            Create a function that returns whether a passed string is a
            palindrome
          </QuestionText>
          <AnswerText>&quot;kayak&quot; = {isPalindrome("kayak").toString()}</AnswerText>
          <AnswerText>&quot;United&quot; = {isPalindrome("United").toString()}</AnswerText>
          <AnswerText>
            &quot;Racecar&quot; = {isPalindrome("Racecar").toString()}
          </AnswerText>
        </Card>
        <Card>
          <QuestionText>
            Create a function that returns the nth number in the Fibonacci
            sequence
          </QuestionText>
          <AnswerText>
            The 2nd number in the sequence is {getNthFibonacciNumber(2)}
          </AnswerText>
          <AnswerText>
            The 7th number in the sequence is {getNthFibonacciNumber(7)}
          </AnswerText>
          <AnswerText>
            The 15th number in the sequence is {getNthFibonacciNumber(15)}
          </AnswerText>
        </Card>
      </div>
    </main>
  );
}
