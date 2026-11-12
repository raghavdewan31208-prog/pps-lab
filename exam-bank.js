/* PPS Lab: progressive C++ exam questions. Evaluation data is browser-side, not secure hidden judging. */
window.__PPS_EXAM_QUESTION_BANK = [
  {
    "id": "EX001",
    "topic": "1D Arrays",
    "subtopic": "Traversal",
    "difficulty": "Easy",
    "title": "Read and Display an Array",
    "statement": "Read N integers into an array and display all elements in their original order.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "1\n8\n",
        "output": "8"
      },
      {
        "input": "5\n2 4 1 3 5\n",
        "output": "2 4 1 3 5"
      }
    ],
    "tests": [
      {
        "input": "1\n8\n",
        "expected": "8"
      },
      {
        "input": "5\n2 4 1 3 5\n",
        "expected": "2 4 1 3 5"
      },
      {
        "input": "4\n-3 0 7 -1\n",
        "expected": "-3 0 7 -1"
      },
      {
        "input": "6\n9 9 -2 5 0 1\n",
        "expected": "9 9 -2 5 0 1"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<a[i];}return 0;}",
    "hints": [
      "Read N before using it as a loop limit.",
      "Store each value at its index.",
      "Use a second loop to print in the same order."
    ],
    "explanation": "This checks basic array input, storage, and traversal.",
    "mode": "full"
  },
  {
    "id": "EX002",
    "topic": "1D Arrays",
    "subtopic": "Aggregation",
    "difficulty": "Easy",
    "title": "Sum and Average of an Array",
    "statement": "Read N integers, calculate their sum, and print the sum followed by the average using integer division.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print sum and integer average (sum / N).",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "4\n1 2 3 4\n",
        "output": "10 2"
      },
      {
        "input": "3\n2 3 4\n",
        "output": "9 3"
      }
    ],
    "tests": [
      {
        "input": "4\n1 2 3 4\n",
        "expected": "10 2"
      },
      {
        "input": "3\n2 3 4\n",
        "expected": "9 3"
      },
      {
        "input": "1\n-5\n",
        "expected": "-5 -5"
      },
      {
        "input": "5\n-4 0 6 2 1\n",
        "expected": "5 1"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],sum=0;cin>>n;for(int i=0;i<n;i++){cin>>a[i];sum+=a[i];}cout<<sum<<\" \"<<sum/n;return 0;}",
    "hints": [
      "Initialize sum to zero.",
      "Add each element exactly once.",
      "Keep the average as integer division."
    ],
    "explanation": "Integer division removes the fractional part of sum divided by N.",
    "mode": "full"
  },
  {
    "id": "EX003",
    "topic": "1D Arrays",
    "subtopic": "Minimum and Maximum",
    "difficulty": "Easy-Medium",
    "title": "Find the Largest and Smallest Element",
    "statement": "Find both the maximum and minimum values in an array. Print the largest first and the smallest second.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print largest and smallest, separated by one space.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "5\n4 9 -2 7 1\n",
        "output": "9 -2"
      },
      {
        "input": "1\n-8\n",
        "output": "-8 -8"
      }
    ],
    "tests": [
      {
        "input": "5\n4 9 -2 7 1\n",
        "expected": "9 -2"
      },
      {
        "input": "1\n-8\n",
        "expected": "-8 -8"
      },
      {
        "input": "4\n-5 -2 -9 -3\n",
        "expected": "-2 -9"
      },
      {
        "input": "6\n0 0 5 5 -1 -1\n",
        "expected": "5 -1"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];int largest=a[0],smallest=a[0];for(int i=1;i<n;i++){if(a[i]>largest)largest=a[i];if(a[i]<smallest)smallest=a[i];}cout<<largest<<\" \"<<smallest;return 0;}",
    "hints": [
      "Initialize both values from a[0].",
      "Scan the remaining elements once.",
      "Update maximum and minimum independently."
    ],
    "explanation": "Initializing from the first element handles all-negative inputs correctly.",
    "mode": "full"
  },
  {
    "id": "EX004",
    "topic": "1D Arrays",
    "subtopic": "Counting",
    "difficulty": "Medium",
    "title": "Count Positive, Negative, and Zero Elements",
    "statement": "Count how many elements are positive, negative, and equal to zero. Print the three counts in that order.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print positiveCount negativeCount zeroCount.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "6\n1 -2 0 4 0 -5\n",
        "output": "2 2 2"
      },
      {
        "input": "3\n0 0 0\n",
        "output": "0 0 3"
      }
    ],
    "tests": [
      {
        "input": "6\n1 -2 0 4 0 -5\n",
        "expected": "2 2 2"
      },
      {
        "input": "3\n0 0 0\n",
        "expected": "0 0 3"
      },
      {
        "input": "4\n-1 -2 -3 -4\n",
        "expected": "0 4 0"
      },
      {
        "input": "5\n8 7 6 5 4\n",
        "expected": "5 0 0"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],p=0,neg=0,z=0;cin>>n;for(int i=0;i<n;i++)cin>>a[i];for(int i=0;i<n;i++){if(a[i]>0)p++;else if(a[i]<0)neg++;else z++;}cout<<p<<\" \"<<neg<<\" \"<<z;return 0;}",
    "hints": [
      "Use three counters initialized to zero.",
      "Make the positive, negative, and zero cases exclusive.",
      "Count every element exactly once."
    ],
    "explanation": "The three mutually exclusive conditions partition all input elements.",
    "mode": "full"
  },
  {
    "id": "EX005",
    "topic": "1D Arrays",
    "subtopic": "Linear Search",
    "difficulty": "Medium",
    "title": "Linear Search in an Array",
    "statement": "Find the first occurrence of a target value and print its zero-based index. Print -1 if the target is absent.",
    "inputFormat": "N, N array elements, then target.",
    "outputFormat": "Print the first matching zero-based index, or -1.",
    "constraints": "1 <= N <= 1000. Indices start at zero.",
    "samples": [
      {
        "input": "5\n4 7 2 7 9\n7\n",
        "output": "1"
      },
      {
        "input": "4\n1 2 3 4\n8\n",
        "output": "-1"
      }
    ],
    "tests": [
      {
        "input": "5\n4 7 2 7 9\n7\n",
        "expected": "1"
      },
      {
        "input": "4\n1 2 3 4\n8\n",
        "expected": "-1"
      },
      {
        "input": "1\n-6\n-6\n",
        "expected": "0"
      },
      {
        "input": "6\n3 5 3 8 3 9\n3\n",
        "expected": "0"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],x,ans=-1;cin>>n;for(int i=0;i<n;i++)cin>>a[i];cin>>x;for(int i=0;i<n;i++)if(a[i]==x){ans=i;break;}cout<<ans;return 0;}",
    "hints": [
      "Initialize the answer to -1.",
      "Scan from index zero towards N-1.",
      "Stop at the first match to get the first occurrence."
    ],
    "explanation": "Linear search checks values in order and returns the first matching zero-based index.",
    "mode": "full"
  },
  {
    "id": "EX006",
    "topic": "1D Arrays",
    "subtopic": "In-place Reversal",
    "difficulty": "Medium-Hard",
    "title": "Reverse an Array In Place",
    "statement": "Reverse the array without using another array. Use two indices that move towards the centre.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "5\n1 2 3 4 5\n",
        "output": "5 4 3 2 1"
      },
      {
        "input": "1\n8\n",
        "output": "8"
      }
    ],
    "tests": [
      {
        "input": "5\n1 2 3 4 5\n",
        "expected": "5 4 3 2 1"
      },
      {
        "input": "1\n8\n",
        "expected": "8"
      },
      {
        "input": "4\n-2 0 7 3\n",
        "expected": "3 7 0 -2"
      },
      {
        "input": "6\n9 1 1 2 8 -4\n",
        "expected": "-4 8 2 1 1 9"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];int left=0,right=n-1;while(left<right){int temp=a[left];a[left]=a[right];a[right]=temp;left++;right--;}for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<a[i];}return 0;}",
    "hints": [
      "Start left at 0 and right at N-1.",
      "Swap the values at the two positions.",
      "Move both indices inward until they meet."
    ],
    "explanation": "Two-sided swapping reverses the array in place using constant extra space.",
    "mode": "full"
  },
  {
    "id": "EX007",
    "topic": "1D Arrays",
    "subtopic": "Distinct Second Maximum",
    "difficulty": "Hard",
    "title": "Find the Second Largest Distinct Element",
    "statement": "Find the second-largest distinct value. Repeated copies of the maximum do not count. Print -1 if no second distinct value exists.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the second-largest distinct value, or -1 if none exists.",
    "constraints": "1 <= N <= 1000. Values are between -1000000000 and 1000000000.",
    "samples": [
      {
        "input": "6\n5 1 5 3 2 5\n",
        "output": "3"
      },
      {
        "input": "4\n7 7 7 7\n",
        "output": "-1"
      }
    ],
    "tests": [
      {
        "input": "6\n5 1 5 3 2 5\n",
        "expected": "3"
      },
      {
        "input": "4\n7 7 7 7\n",
        "expected": "-1"
      },
      {
        "input": "5\n-8 -2 -5 -2 -9\n",
        "expected": "-5"
      },
      {
        "input": "1\n42\n",
        "expected": "-1"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\n#include <climits>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];int largest=INT_MIN,second=INT_MIN;for(int i=0;i<n;i++){if(a[i]>largest){second=largest;largest=a[i];}else if(a[i]<largest&&a[i]>second)second=a[i];}if(second==INT_MIN)cout<<-1;else cout<<second;return 0;}",
    "hints": [
      "Track largest and second largest separately.",
      "When a new maximum appears, the old maximum becomes second.",
      "Ignore values equal to the current maximum."
    ],
    "explanation": "The strict comparison excludes duplicate maximum values.",
    "mode": "full"
  },
  {
    "id": "EX008",
    "topic": "2D Arrays and Matrices",
    "subtopic": "Matrix Traversal",
    "difficulty": "Easy",
    "title": "Read and Display a Matrix",
    "statement": "Read the dimensions, accept matrix elements, and display the matrix in its original row-column layout.",
    "inputFormat": "Rows R and columns C, followed by R rows containing C integers.",
    "outputFormat": "Print the resulting matrix, one row per line, with elements separated by spaces.",
    "constraints": "1 <= R,C <= 100. Matrix elements fit in a signed 32-bit integer.",
    "samples": [
      {
        "input": "2 3\n1 2 3\n4 5 6\n",
        "output": "1 2 3\n4 5 6"
      },
      {
        "input": "1 1\n9\n",
        "output": "9"
      }
    ],
    "tests": [
      {
        "input": "2 3\n1 2 3\n4 5 6\n",
        "expected": "1 2 3\n4 5 6"
      },
      {
        "input": "1 1\n9\n",
        "expected": "9"
      },
      {
        "input": "3 2\n-1 0\n4 5\n7 -2\n",
        "expected": "-1 0\n4 5\n7 -2"
      },
      {
        "input": "2 2\n8 8\n0 -3\n",
        "expected": "8 8\n0 -3"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int r,c,a[100][100];cin>>r>>c;for(int i=0;i<r;i++)for(int k=0;k<c;k++)cin>>a[i][k];for(int i=0;i<r;i++){for(int k=0;k<c;k++){if(k)cout<<\" \";cout<<a[i][k];}if(i+1<r)cout<<\"\\n\";}return 0;}",
    "hints": [
      "Use one loop for rows and a nested loop for columns.",
      "Read every a[i][k].",
      "Print a newline after each completed row."
    ],
    "explanation": "Two nested loops follow the two-dimensional array's row-column structure.",
    "mode": "full"
  },
  {
    "id": "EX009",
    "topic": "2D Arrays and Matrices",
    "subtopic": "Matrix Aggregation",
    "difficulty": "Easy",
    "title": "Sum and Average of Matrix Elements",
    "statement": "Calculate the sum of all matrix elements and their arithmetic average. Print the average to exactly two decimal places.",
    "inputFormat": "Rows R and columns C, followed by R rows containing C integers.",
    "outputFormat": "Print the sum followed by the average with two decimal places.",
    "constraints": "1 <= R,C <= 100. Use floating-point division.",
    "samples": [
      {
        "input": "2 2\n1 2\n3 4\n",
        "output": "10 2.50"
      },
      {
        "input": "1 3\n2 2 2\n",
        "output": "6 2.00"
      }
    ],
    "tests": [
      {
        "input": "2 2\n1 2\n3 4\n",
        "expected": "10 2.50"
      },
      {
        "input": "1 3\n2 2 2\n",
        "expected": "6 2.00"
      },
      {
        "input": "2 3\n-1 0 1\n2 3 4\n",
        "expected": "9 1.50"
      },
      {
        "input": "3 1\n5\n0\n-2\n",
        "expected": "3 1.00"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main(){int r,c,a[100][100],sum=0;cin>>r>>c;for(int i=0;i<r;i++)for(int k=0;k<c;k++){cin>>a[i][k];sum+=a[i][k];}cout<<sum<<\" \"<<fixed<<setprecision(2)<<(double)sum/(r*c);return 0;}",
    "hints": [
      "The total number of cells is R*C.",
      "Add every matrix element to sum.",
      "Cast the sum to double before dividing."
    ],
    "explanation": "The mean divides the total sum by the number of cells and preserves fractional values.",
    "mode": "full"
  },
  {
    "id": "EX010",
    "topic": "2D Arrays and Matrices",
    "subtopic": "Matrix Addition",
    "difficulty": "Easy-Medium",
    "title": "Addition of Two Matrices",
    "statement": "Read two matrices with the same dimensions and print their element-wise sum.",
    "inputFormat": "R and C, followed by matrix A and matrix B.",
    "outputFormat": "Print the sum matrix.",
    "constraints": "1 <= R,C <= 100. Both matrices have the same dimensions.",
    "samples": [
      {
        "input": "2 2\n1 2\n3 4\n5 6\n7 8\n",
        "output": "6 8\n10 12"
      },
      {
        "input": "1 1\n-3\n8\n",
        "output": "5"
      }
    ],
    "tests": [
      {
        "input": "2 2\n1 2\n3 4\n5 6\n7 8\n",
        "expected": "6 8\n10 12"
      },
      {
        "input": "1 1\n-3\n8\n",
        "expected": "5"
      },
      {
        "input": "2 3\n1 0 -1\n2 3 4\n5 6 7\n-1 -2 -3\n",
        "expected": "6 6 6\n1 1 1"
      },
      {
        "input": "1 2\n100 -100\n-50 25\n",
        "expected": "50 -75"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int r,c,a[100][100],b[100][100];cin>>r>>c;for(int i=0;i<r;i++)for(int k=0;k<c;k++)cin>>a[i][k];for(int i=0;i<r;i++)for(int k=0;k<c;k++)cin>>b[i][k];for(int i=0;i<r;i++){for(int k=0;k<c;k++){if(k)cout<<\" \";cout<<a[i][k]+b[i][k];}if(i+1<r)cout<<\"\\n\";}return 0;}",
    "hints": [
      "Read both matrices before printing the result.",
      "The result at [i][k] is A[i][k]+B[i][k].",
      "Use matching row and column indices."
    ],
    "explanation": "Matrix addition adds the values at corresponding positions.",
    "mode": "full"
  },
  {
    "id": "EX011",
    "topic": "2D Arrays and Matrices",
    "subtopic": "Transpose",
    "difficulty": "Medium",
    "title": "Transpose of a Matrix",
    "statement": "Calculate and display the transpose. An R x C matrix becomes a C x R matrix.",
    "inputFormat": "Rows R and columns C, followed by R rows containing C integers.",
    "outputFormat": "Print the transpose with C rows and R columns.",
    "constraints": "1 <= R,C <= 100. Matrix elements fit in a signed 32-bit integer.",
    "samples": [
      {
        "input": "2 3\n1 2 3\n4 5 6\n",
        "output": "1 4\n2 5\n3 6"
      },
      {
        "input": "1 2\n7 9\n",
        "output": "7\n9"
      }
    ],
    "tests": [
      {
        "input": "2 3\n1 2 3\n4 5 6\n",
        "expected": "1 4\n2 5\n3 6"
      },
      {
        "input": "1 2\n7 9\n",
        "expected": "7\n9"
      },
      {
        "input": "3 1\n5\n-2\n8\n",
        "expected": "5 -2 8"
      },
      {
        "input": "2 2\n1 2\n3 4\n",
        "expected": "1 3\n2 4"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int r,c,a[100][100];cin>>r>>c;for(int i=0;i<r;i++)for(int k=0;k<c;k++)cin>>a[i][k];for(int k=0;k<c;k++){for(int i=0;i<r;i++){if(i)cout<<\" \";cout<<a[i][k];}if(k+1<c)cout<<\"\\n\";}return 0;}",
    "hints": [
      "The transposed dimensions are C rows and R columns.",
      "The original a[i][k] becomes transposed position [k][i].",
      "Make the original column loop the outer loop."
    ],
    "explanation": "Transposition exchanges row and column indices.",
    "mode": "full"
  },
  {
    "id": "EX012",
    "topic": "2D Arrays and Matrices",
    "subtopic": "Diagonal Sums",
    "difficulty": "Medium",
    "title": "Sum of Primary and Secondary Diagonals",
    "statement": "For a square matrix, calculate the primary and secondary diagonal sums separately. The centre element of an odd-sized matrix belongs to both diagonals.",
    "inputFormat": "N followed by an N x N matrix.",
    "outputFormat": "Print primaryDiagonalSum and secondaryDiagonalSum.",
    "constraints": "1 <= N <= 100.",
    "samples": [
      {
        "input": "3\n1 2 3\n4 5 6\n7 8 9\n",
        "output": "15 15"
      },
      {
        "input": "2\n1 2\n3 4\n",
        "output": "5 5"
      }
    ],
    "tests": [
      {
        "input": "3\n1 2 3\n4 5 6\n7 8 9\n",
        "expected": "15 15"
      },
      {
        "input": "2\n1 2\n3 4\n",
        "expected": "5 5"
      },
      {
        "input": "1\n-7\n",
        "expected": "-7 -7"
      },
      {
        "input": "4\n1 0 0 2\n0 3 4 0\n0 5 6 0\n7 0 0 8\n",
        "expected": "18 18"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[100][100],p=0,s=0;cin>>n;for(int i=0;i<n;i++)for(int k=0;k<n;k++)cin>>a[i][k];for(int i=0;i<n;i++){p+=a[i][i];s+=a[i][n-1-i];}cout<<p<<\" \"<<s;return 0;}",
    "hints": [
      "The primary diagonal uses a[i][i].",
      "The secondary diagonal uses a[i][N-1-i].",
      "Include the middle cell in both sums when N is odd."
    ],
    "explanation": "Each diagonal takes one element from every row.",
    "mode": "full"
  },
  {
    "id": "EX013",
    "topic": "2D Arrays and Matrices",
    "subtopic": "Identity Matrix",
    "difficulty": "Medium-Hard",
    "title": "Check Whether a Matrix Is an Identity Matrix",
    "statement": "Determine whether a square matrix has 1s on its main diagonal and 0s everywhere else. Print YES or NO.",
    "inputFormat": "N followed by an N x N matrix.",
    "outputFormat": "Print YES if it is an identity matrix; otherwise NO.",
    "constraints": "1 <= N <= 100.",
    "samples": [
      {
        "input": "3\n1 0 0\n0 1 0\n0 0 1\n",
        "output": "YES"
      },
      {
        "input": "2\n1 0\n1 1\n",
        "output": "NO"
      }
    ],
    "tests": [
      {
        "input": "3\n1 0 0\n0 1 0\n0 0 1\n",
        "expected": "YES"
      },
      {
        "input": "2\n1 0\n1 1\n",
        "expected": "NO"
      },
      {
        "input": "1\n1\n",
        "expected": "YES"
      },
      {
        "input": "2\n0 0\n0 0\n",
        "expected": "NO"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[100][100],identity=1;cin>>n;for(int i=0;i<n;i++)for(int k=0;k<n;k++)cin>>a[i][k];for(int i=0;i<n;i++)for(int k=0;k<n;k++){if(i==k&&a[i][k]!=1)identity=0;if(i!=k&&a[i][k]!=0)identity=0;}cout<<(identity?\"YES\":\"NO\");return 0;}",
    "hints": [
      "A diagonal cell must equal 1.",
      "An off-diagonal cell must equal 0.",
      "One violation is enough to reject the matrix."
    ],
    "explanation": "The identity matrix conditions apply to every matrix element.",
    "mode": "full"
  },
  {
    "id": "EX014",
    "topic": "2D Arrays and Matrices",
    "subtopic": "Symmetric Matrix",
    "difficulty": "Hard",
    "title": "Check Whether a Matrix Is Symmetric",
    "statement": "Determine whether a square matrix equals its transpose by checking A[i][k] == A[k][i] for every pair. Print YES or NO.",
    "inputFormat": "N followed by an N x N matrix.",
    "outputFormat": "Print YES if symmetric; otherwise NO.",
    "constraints": "1 <= N <= 100.",
    "samples": [
      {
        "input": "3\n1 2 3\n2 4 5\n3 5 6\n",
        "output": "YES"
      },
      {
        "input": "2\n1 2\n3 4\n",
        "output": "NO"
      }
    ],
    "tests": [
      {
        "input": "3\n1 2 3\n2 4 5\n3 5 6\n",
        "expected": "YES"
      },
      {
        "input": "2\n1 2\n3 4\n",
        "expected": "NO"
      },
      {
        "input": "1\n9\n",
        "expected": "YES"
      },
      {
        "input": "3\n0 -1 4\n-1 2 3\n4 0 5\n",
        "expected": "NO"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[100][100],ok=1;cin>>n;for(int i=0;i<n;i++)for(int k=0;k<n;k++)cin>>a[i][k];for(int i=0;i<n;i++)for(int k=i+1;k<n;k++)if(a[i][k]!=a[k][i])ok=0;cout<<(ok?\"YES\":\"NO\");return 0;}",
    "hints": [
      "Compare each cell with its transposed position.",
      "Checking only k>i avoids repeating a pair.",
      "The diagonal cells always match themselves."
    ],
    "explanation": "A matrix is symmetric when every pair across the main diagonal is equal.",
    "mode": "full"
  },
  {
    "id": "EX015",
    "topic": "2D Arrays and Matrices",
    "subtopic": "Matrix Multiplication",
    "difficulty": "Hard / Examination Level",
    "title": "Multiplication of Two Matrices",
    "statement": "Multiply two matrices after checking dimensions. If A is R1 x C1 and B is R2 x C2, multiplication is valid only when C1 equals R2. Print Invalid otherwise.",
    "inputFormat": "R1 C1, matrix A, R2 C2, matrix B.",
    "outputFormat": "Print Invalid if C1 != R2; otherwise print the R1 x C2 product.",
    "constraints": "1 <= each dimension <= 30.",
    "samples": [
      {
        "input": "2 2\n1 2\n3 4\n2 2\n5 6\n7 8\n",
        "output": "19 22\n43 50"
      },
      {
        "input": "1 2\n1 2\n2 1\n3\n4\n",
        "output": "11"
      }
    ],
    "tests": [
      {
        "input": "2 2\n1 2\n3 4\n2 2\n5 6\n7 8\n",
        "expected": "19 22\n43 50"
      },
      {
        "input": "1 2\n1 2\n2 1\n3\n4\n",
        "expected": "11"
      },
      {
        "input": "2 3\n1 2 3\n4 5 6\n2 2\n1 0\n0 1\n",
        "expected": "Invalid"
      },
      {
        "input": "1 1\n-3\n1 1\n4\n",
        "expected": "-12"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int r1,c1,r2,c2,a[30][30],b[30][30];cin>>r1>>c1;for(int i=0;i<r1;i++)for(int k=0;k<c1;k++)cin>>a[i][k];cin>>r2>>c2;for(int i=0;i<r2;i++)for(int k=0;k<c2;k++)cin>>b[i][k];if(c1!=r2){cout<<\"Invalid\";return 0;}for(int i=0;i<r1;i++){for(int k=0;k<c2;k++){int sum=0;for(int t=0;t<c1;t++)sum+=a[i][t]*b[t][k];if(k)cout<<\" \";cout<<sum;}if(i+1<r1)cout<<\"\\n\";}return 0;}",
    "hints": [
      "Check C1 == R2 before multiplying.",
      "Each result cell is one row of A dotted with one column of B.",
      "Reset sum to zero for every result cell."
    ],
    "explanation": "Matrix multiplication combines a row of the first matrix with a column of the second.",
    "mode": "full"
  },
  {
    "id": "EX016",
    "topic": "Searching",
    "subtopic": "Linear Search",
    "difficulty": "Easy",
    "title": "Linear Search",
    "statement": "Search for a target value in an unsorted array using linear search. Print FOUND if it occurs, otherwise NOT FOUND.",
    "inputFormat": "N, N array elements, then target.",
    "outputFormat": "Print FOUND or NOT FOUND.",
    "constraints": "1 <= N <= 1000. The array is not necessarily sorted.",
    "samples": [
      {
        "input": "5\n2 8 1 7 4\n7\n",
        "output": "FOUND"
      },
      {
        "input": "4\n1 3 5 7\n2\n",
        "output": "NOT FOUND"
      }
    ],
    "tests": [
      {
        "input": "5\n2 8 1 7 4\n7\n",
        "expected": "FOUND"
      },
      {
        "input": "4\n1 3 5 7\n2\n",
        "expected": "NOT FOUND"
      },
      {
        "input": "1\n9\n9\n",
        "expected": "FOUND"
      },
      {
        "input": "6\n-1 -1 0 2 3 4\n-1\n",
        "expected": "FOUND"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],x,found=0;cin>>n;for(int i=0;i<n;i++)cin>>a[i];cin>>x;for(int i=0;i<n;i++)if(a[i]==x)found=1;cout<<(found?\"FOUND\":\"NOT FOUND\");return 0;}",
    "hints": [
      "Linear search does not require sorted input.",
      "Compare the target with each element.",
      "Keep a found indicator if a match occurs."
    ],
    "explanation": "A complete scan determines whether the target appears anywhere.",
    "mode": "full"
  },
  {
    "id": "EX017",
    "topic": "Searching",
    "subtopic": "First Occurrence",
    "difficulty": "Easy-Medium",
    "title": "Find the First Occurrence",
    "statement": "Find the first occurrence of a target in an array and print its zero-based index, or -1 when absent.",
    "inputFormat": "N, N array elements, then target.",
    "outputFormat": "Print the first matching zero-based index, or -1.",
    "constraints": "1 <= N <= 1000.",
    "samples": [
      {
        "input": "6\n4 2 7 2 9 2\n2\n",
        "output": "1"
      },
      {
        "input": "5\n1 3 5 7 9\n8\n",
        "output": "-1"
      }
    ],
    "tests": [
      {
        "input": "6\n4 2 7 2 9 2\n2\n",
        "expected": "1"
      },
      {
        "input": "5\n1 3 5 7 9\n8\n",
        "expected": "-1"
      },
      {
        "input": "4\n6 6 6 6\n6\n",
        "expected": "0"
      },
      {
        "input": "5\n-3 0 -3 2 -3\n-3\n",
        "expected": "0"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],x,ans=-1;cin>>n;for(int i=0;i<n;i++)cin>>a[i];cin>>x;for(int i=0;i<n;i++)if(a[i]==x){ans=i;break;}cout<<ans;return 0;}",
    "hints": [
      "Start answer at -1.",
      "Traverse left to right.",
      "Stop immediately at the first match."
    ],
    "explanation": "Left-to-right traversal and an immediate break guarantee the first index.",
    "mode": "full"
  },
  {
    "id": "EX018",
    "topic": "Searching",
    "subtopic": "Frequency Counting",
    "difficulty": "Medium",
    "title": "Count the Frequency of an Element",
    "statement": "Count how many times a target value occurs in an array. Print zero when it is absent.",
    "inputFormat": "N, N array elements, then target.",
    "outputFormat": "Print the number of occurrences.",
    "constraints": "1 <= N <= 1000.",
    "samples": [
      {
        "input": "6\n1 2 2 3 2 4\n2\n",
        "output": "3"
      },
      {
        "input": "4\n5 5 5 5\n5\n",
        "output": "4"
      }
    ],
    "tests": [
      {
        "input": "6\n1 2 2 3 2 4\n2\n",
        "expected": "3"
      },
      {
        "input": "4\n5 5 5 5\n5\n",
        "expected": "4"
      },
      {
        "input": "3\n1 2 3\n9\n",
        "expected": "0"
      },
      {
        "input": "5\n0 -1 0 -1 0\n-1\n",
        "expected": "2"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],x,count=0;cin>>n;for(int i=0;i<n;i++)cin>>a[i];cin>>x;for(int i=0;i<n;i++)if(a[i]==x)count++;cout<<count;return 0;}",
    "hints": [
      "Initialize a frequency counter to zero.",
      "Do not stop at the first match.",
      "Increment for every element equal to the target."
    ],
    "explanation": "Frequency requires checking the complete array.",
    "mode": "full"
  },
  {
    "id": "EX019",
    "topic": "Searching",
    "subtopic": "Iterative Binary Search",
    "difficulty": "Medium",
    "title": "Binary Search",
    "statement": "Implement iterative binary search on an ascending sorted array. Print the target's zero-based index or -1.",
    "inputFormat": "N, N sorted integers, then target.",
    "outputFormat": "Print the zero-based index, or -1.",
    "constraints": "1 <= N <= 1000. Input is sorted in non-decreasing order.",
    "samples": [
      {
        "input": "6\n2 5 8 12 16 23\n12\n",
        "output": "3"
      },
      {
        "input": "5\n1 3 5 7 9\n1\n",
        "output": "0"
      }
    ],
    "tests": [
      {
        "input": "6\n2 5 8 12 16 23\n12\n",
        "expected": "3"
      },
      {
        "input": "5\n1 3 5 7 9\n1\n",
        "expected": "0"
      },
      {
        "input": "5\n2 4 6 8 10\n7\n",
        "expected": "-1"
      },
      {
        "input": "1\n-4\n-4\n",
        "expected": "0"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],x;cin>>n;for(int i=0;i<n;i++)cin>>a[i];cin>>x;int low=0,high=n-1,ans=-1;while(low<=high){int mid=low+(high-low)/2;if(a[mid]==x){ans=mid;break;}else if(a[mid]<x)low=mid+1;else high=mid-1;}cout<<ans;return 0;}",
    "hints": [
      "Binary search requires sorted input.",
      "Calculate mid as low+(high-low)/2.",
      "Discard the half that cannot contain the target."
    ],
    "explanation": "Binary search halves the remaining search interval after each comparison.",
    "mode": "full"
  },
  {
    "id": "EX020",
    "topic": "Searching",
    "subtopic": "First and Last Occurrence",
    "difficulty": "Medium-Hard",
    "title": "Find First and Last Occurrence Using Binary Search",
    "statement": "Use binary-search boundaries to find the first and last zero-based positions of a target in a sorted array. Print -1 -1 when absent.",
    "inputFormat": "N, N sorted integers, then target.",
    "outputFormat": "Print firstIndex lastIndex, or -1 -1.",
    "constraints": "1 <= N <= 1000. Input is sorted in non-decreasing order.",
    "samples": [
      {
        "input": "8\n1 2 2 2 3 4 4 5\n2\n",
        "output": "1 3"
      },
      {
        "input": "5\n1 2 3 4 5\n9\n",
        "output": "-1 -1"
      }
    ],
    "tests": [
      {
        "input": "8\n1 2 2 2 3 4 4 5\n2\n",
        "expected": "1 3"
      },
      {
        "input": "5\n1 2 3 4 5\n9\n",
        "expected": "-1 -1"
      },
      {
        "input": "4\n7 7 7 7\n7\n",
        "expected": "0 3"
      },
      {
        "input": "6\n-2 -2 0 0 0 4\n0\n",
        "expected": "2 4"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],x;cin>>n;for(int i=0;i<n;i++)cin>>a[i];cin>>x;int low=0,high=n-1,first=-1,last=-1;while(low<=high){int mid=low+(high-low)/2;if(a[mid]>=x)high=mid-1;else low=mid+1;}if(low<n&&a[low]==x)first=low;low=0;high=n-1;while(low<=high){int mid=low+(high-low)/2;if(a[mid]<=x)low=mid+1;else high=mid-1;}if(high>=0&&a[high]==x)last=high;cout<<first<<\" \"<<last;return 0;}",
    "hints": [
      "Use a lower-bound style search for the first position.",
      "Use an upper-bound style search for the last position.",
      "Verify the candidate positions contain the target."
    ],
    "explanation": "Two boundary searches isolate the full range of equal elements.",
    "mode": "full"
  },
  {
    "id": "EX021",
    "topic": "Searching",
    "subtopic": "Insertion Position",
    "difficulty": "Hard",
    "title": "Find the Insertion Position Using Binary Search",
    "statement": "Find the zero-based insertion position in an ascending sorted array. Return the position before the first equal element; the answer may be N.",
    "inputFormat": "N, N sorted integers, then target.",
    "outputFormat": "Print the zero-based insertion index.",
    "constraints": "0 <= N <= 1000. Input is sorted in non-decreasing order.",
    "samples": [
      {
        "input": "5\n1 3 5 7 9\n6\n",
        "output": "3"
      },
      {
        "input": "4\n1 2 2 4\n2\n",
        "output": "1"
      }
    ],
    "tests": [
      {
        "input": "5\n1 3 5 7 9\n6\n",
        "expected": "3"
      },
      {
        "input": "4\n1 2 2 4\n2\n",
        "expected": "1"
      },
      {
        "input": "3\n5 7 9\n1\n",
        "expected": "0"
      },
      {
        "input": "3\n1 4 8\n10\n",
        "expected": "3"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],x;cin>>n;for(int i=0;i<n;i++)cin>>a[i];cin>>x;int low=0,high=n;while(low<high){int mid=low+(high-low)/2;if(a[mid]<x)low=mid+1;else high=mid;}cout<<low;return 0;}",
    "hints": [
      "Find the first value not smaller than the target.",
      "Use high=N as the exclusive upper boundary.",
      "When equal, continue searching left."
    ],
    "explanation": "This is a lower-bound binary search.",
    "mode": "full"
  },
  {
    "id": "EX022",
    "topic": "Searching",
    "subtopic": "Recursive Binary Search",
    "difficulty": "Hard / Examination Level",
    "title": "Recursive Binary Search",
    "statement": "Implement binary search using a recursive function. Return the target's zero-based index or -1 if absent.",
    "inputFormat": "N, N sorted integers, then target.",
    "outputFormat": "Print the zero-based index, or -1.",
    "constraints": "1 <= N <= 1000. Input is sorted in ascending order.",
    "samples": [
      {
        "input": "6\n2 5 8 12 16 23\n12\n",
        "output": "3"
      },
      {
        "input": "5\n1 3 5 7 9\n4\n",
        "output": "-1"
      }
    ],
    "tests": [
      {
        "input": "6\n2 5 8 12 16 23\n12\n",
        "expected": "3"
      },
      {
        "input": "5\n1 3 5 7 9\n4\n",
        "expected": "-1"
      },
      {
        "input": "1\n10\n10\n",
        "expected": "0"
      },
      {
        "input": "7\n-8 -4 -1 0 3 8 11\n11\n",
        "expected": "6"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint search(int a[],int low,int high,int x){if(low>high)return -1;int mid=low+(high-low)/2;if(a[mid]==x)return mid;if(a[mid]<x)return search(a,mid+1,high,x);return search(a,low,mid-1,x);}\nint main(){int n,a[1000],x;cin>>n;for(int i=0;i<n;i++)cin>>a[i];cin>>x;cout<<search(a,0,n-1,x);return 0;}",
    "hints": [
      "The base case is low > high.",
      "Calculate mid safely.",
      "Make one recursive call on the remaining half."
    ],
    "explanation": "Each recursive call reduces the interval until the target is found or the interval becomes empty.",
    "mode": "full"
  },
  {
    "id": "EX023",
    "topic": "Sorting",
    "subtopic": "Bubble Sort · Ascending",
    "difficulty": "Easy",
    "title": "Bubble Sort in Ascending Order",
    "statement": "Sort the array in ascending order using bubble sort. Do not use a built-in sorting function.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "5\n5 1 4 2 8\n",
        "output": "1 2 4 5 8"
      },
      {
        "input": "1\n7\n",
        "output": "7"
      }
    ],
    "tests": [
      {
        "input": "5\n5 1 4 2 8\n",
        "expected": "1 2 4 5 8"
      },
      {
        "input": "1\n7\n",
        "expected": "7"
      },
      {
        "input": "4\n-2 3 0 -1\n",
        "expected": "-2 -1 0 3"
      },
      {
        "input": "5\n3 3 1 2 1\n",
        "expected": "1 1 2 3 3"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];for(int i=0;i<n-1;i++)for(int k=0;k<n-i-1;k++)if(a[k]>a[k+1]){int temp=a[k];a[k]=a[k+1];a[k+1]=temp;}for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<a[i];}return 0;}",
    "hints": [
      "Compare adjacent elements.",
      "Swap when the left element is larger.",
      "After every pass, the largest unsorted value reaches the end."
    ],
    "explanation": "Bubble sort repeatedly moves larger values right by adjacent swaps.",
    "mode": "full"
  },
  {
    "id": "EX024",
    "topic": "Sorting",
    "subtopic": "Bubble Sort · Descending",
    "difficulty": "Easy-Medium",
    "title": "Bubble Sort in Descending Order",
    "statement": "Sort the array in descending order using bubble sort. Do not use a built-in sorting function.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "5\n5 1 4 2 8\n",
        "output": "8 5 4 2 1"
      },
      {
        "input": "4\n-3 0 7 2\n",
        "output": "7 2 0 -3"
      }
    ],
    "tests": [
      {
        "input": "5\n5 1 4 2 8\n",
        "expected": "8 5 4 2 1"
      },
      {
        "input": "4\n-3 0 7 2\n",
        "expected": "7 2 0 -3"
      },
      {
        "input": "1\n9\n",
        "expected": "9"
      },
      {
        "input": "5\n3 3 1 2 1\n",
        "expected": "3 3 2 1 1"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];for(int i=0;i<n-1;i++)for(int k=0;k<n-i-1;k++)if(a[k]<a[k+1]){int temp=a[k];a[k]=a[k+1];a[k+1]=temp;}for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<a[i];}return 0;}",
    "hints": [
      "Use adjacent comparisons as in ascending bubble sort.",
      "Reverse the comparison condition.",
      "Swap when the left value is smaller."
    ],
    "explanation": "Reversing the comparison makes larger values move towards the beginning.",
    "mode": "full"
  },
  {
    "id": "EX025",
    "topic": "Sorting",
    "subtopic": "Bubble Sort · Swap Count",
    "difficulty": "Medium",
    "title": "Count Swaps in Bubble Sort",
    "statement": "Sort in ascending order using bubble sort and count the total number of swaps. Print the sorted array, then the swap count.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "First line: sorted array. Second line: number of swaps.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "4\n4 3 2 1\n",
        "output": "1 2 3 4\n6"
      },
      {
        "input": "3\n1 2 3\n",
        "output": "1 2 3\n0"
      }
    ],
    "tests": [
      {
        "input": "4\n4 3 2 1\n",
        "expected": "1 2 3 4\n6"
      },
      {
        "input": "3\n1 2 3\n",
        "expected": "1 2 3\n0"
      },
      {
        "input": "5\n2 1 2 1 2\n",
        "expected": "1 1 2 2 2\n3"
      },
      {
        "input": "2\n9 -1\n",
        "expected": "-1 9\n1"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],swaps=0;cin>>n;for(int i=0;i<n;i++)cin>>a[i];for(int i=0;i<n-1;i++)for(int k=0;k<n-i-1;k++)if(a[k]>a[k+1]){int temp=a[k];a[k]=a[k+1];a[k+1]=temp;swaps++;}for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<a[i];}cout<<\"\\n\"<<swaps;return 0;}",
    "hints": [
      "Initialize swaps to zero.",
      "Increment it only when values are exchanged.",
      "Comparisons alone are not swaps."
    ],
    "explanation": "Each exchange increments the counter once; an already sorted array causes zero swaps.",
    "mode": "full"
  },
  {
    "id": "EX026",
    "topic": "Sorting",
    "subtopic": "Selection Sort · Ascending",
    "difficulty": "Medium",
    "title": "Selection Sort in Ascending Order",
    "statement": "Use selection sort to arrange elements in ascending order. Select the smallest remaining element in each pass.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "5\n64 25 12 22 11\n",
        "output": "11 12 22 25 64"
      },
      {
        "input": "4\n4 3 2 1\n",
        "output": "1 2 3 4"
      }
    ],
    "tests": [
      {
        "input": "5\n64 25 12 22 11\n",
        "expected": "11 12 22 25 64"
      },
      {
        "input": "4\n4 3 2 1\n",
        "expected": "1 2 3 4"
      },
      {
        "input": "3\n-5 -1 -9\n",
        "expected": "-9 -5 -1"
      },
      {
        "input": "5\n2 2 1 1 3\n",
        "expected": "1 1 2 2 3"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];for(int i=0;i<n-1;i++){int min=i;for(int k=i+1;k<n;k++)if(a[k]<a[min])min=k;int temp=a[i];a[i]=a[min];a[min]=temp;}for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<a[i];}return 0;}",
    "hints": [
      "Assume the current position is the smallest remaining value.",
      "Scan the unsorted suffix for a smaller element.",
      "Swap the selected minimum into position i."
    ],
    "explanation": "Selection sort places one minimum value into its final position in each pass.",
    "mode": "full"
  },
  {
    "id": "EX027",
    "topic": "Sorting",
    "subtopic": "Selection Sort · Descending",
    "difficulty": "Medium-Hard",
    "title": "Selection Sort in Descending Order",
    "statement": "Use selection sort in descending order. Select the largest remaining element and place it at the current position.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "5\n64 25 12 22 11\n",
        "output": "64 25 22 12 11"
      },
      {
        "input": "4\n-5 -1 -9 2\n",
        "output": "2 -1 -5 -9"
      }
    ],
    "tests": [
      {
        "input": "5\n64 25 12 22 11\n",
        "expected": "64 25 22 12 11"
      },
      {
        "input": "4\n-5 -1 -9 2\n",
        "expected": "2 -1 -5 -9"
      },
      {
        "input": "3\n7 7 3\n",
        "expected": "7 7 3"
      },
      {
        "input": "1\n-8\n",
        "expected": "-8"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];for(int i=0;i<n-1;i++){int largest=i;for(int k=i+1;k<n;k++)if(a[k]>a[largest])largest=k;int temp=a[i];a[i]=a[largest];a[largest]=temp;}for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<a[i];}return 0;}",
    "hints": [
      "Track the index of the largest remaining value.",
      "Scan from i+1 to N-1.",
      "Swap that maximum into the current position."
    ],
    "explanation": "Selecting the maximum in each pass builds descending order.",
    "mode": "full"
  },
  {
    "id": "EX028",
    "topic": "Sorting",
    "subtopic": "Insertion Sort · Ascending",
    "difficulty": "Medium-Hard",
    "title": "Insertion Sort in Ascending Order",
    "statement": "Sort using insertion sort. Grow a sorted prefix by shifting larger values and inserting the next element into its correct place.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "5\n5 2 4 6 1\n",
        "output": "1 2 4 5 6"
      },
      {
        "input": "4\n4 3 2 1\n",
        "output": "1 2 3 4"
      }
    ],
    "tests": [
      {
        "input": "5\n5 2 4 6 1\n",
        "expected": "1 2 4 5 6"
      },
      {
        "input": "4\n4 3 2 1\n",
        "expected": "1 2 3 4"
      },
      {
        "input": "5\n1 2 3 4 5\n",
        "expected": "1 2 3 4 5"
      },
      {
        "input": "6\n0 -2 7 -1 3 3\n",
        "expected": "-2 -1 0 3 3 7"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];for(int i=1;i<n;i++){int key=a[i],k=i-1;while(k>=0&&a[k]>key){a[k+1]=a[k];k--;}a[k+1]=key;}for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<a[i];}return 0;}",
    "hints": [
      "The first element is a sorted prefix.",
      "Store the next element in key before shifting.",
      "Shift only values greater than key, then insert it."
    ],
    "explanation": "Insertion sort maintains a sorted prefix and inserts each next value in order.",
    "mode": "full"
  },
  {
    "id": "EX029",
    "topic": "Sorting",
    "subtopic": "Partial Selection Sort",
    "difficulty": "Hard / Examination Level",
    "title": "Find the Kth Smallest Element Using Selection Sort",
    "statement": "Use selection-sort logic to find the kth smallest value. Perform only the passes needed to place the first K smallest values; K is one-based.",
    "inputFormat": "N, N integers, then K.",
    "outputFormat": "Print the kth smallest value.",
    "constraints": "1 <= K <= N <= 1000. Duplicates occupy separate sorted positions.",
    "samples": [
      {
        "input": "6\n7 10 4 3 20 15\n3\n",
        "output": "7"
      },
      {
        "input": "5\n1 1 1 2 2\n4\n",
        "output": "2"
      }
    ],
    "tests": [
      {
        "input": "6\n7 10 4 3 20 15\n3\n",
        "expected": "7"
      },
      {
        "input": "5\n1 1 1 2 2\n4\n",
        "expected": "2"
      },
      {
        "input": "4\n9 -1 5 0\n1\n",
        "expected": "-1"
      },
      {
        "input": "5\n5 4 3 2 1\n5\n",
        "expected": "5"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],k;cin>>n;for(int i=0;i<n;i++)cin>>a[i];cin>>k;for(int i=0;i<k;i++){int min=i;for(int t=i+1;t<n;t++)if(a[t]<a[min])min=t;int temp=a[i];a[i]=a[min];a[min]=temp;}cout<<a[k-1];return 0;}",
    "hints": [
      "K is one-based, so the target ends at index K-1.",
      "Find the minimum in the unsorted suffix on each pass.",
      "Stop after K passes."
    ],
    "explanation": "Only K selection-sort passes are required to place the kth smallest element.",
    "mode": "full"
  },
  {
    "id": "EX030",
    "topic": "Pointers and Pointer Arithmetic",
    "subtopic": "Dereferencing",
    "difficulty": "Easy",
    "title": "Access a Variable Using a Pointer",
    "statement": "Declare an integer and a pointer to it. Display the variable's value by dereferencing the pointer.",
    "inputFormat": "One integer x.",
    "outputFormat": "Print x using *p.",
    "constraints": "Input value fits in a signed 32-bit integer.",
    "samples": [
      {
        "input": "15\n",
        "output": "15"
      },
      {
        "input": "-8\n",
        "output": "-8"
      }
    ],
    "tests": [
      {
        "input": "15\n",
        "expected": "15"
      },
      {
        "input": "-8\n",
        "expected": "-8"
      },
      {
        "input": "0\n",
        "expected": "0"
      },
      {
        "input": "214\n",
        "expected": "214"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int x;cin>>x;int *p=&x;cout<<*p;return 0;}",
    "hints": [
      "Declare the integer first.",
      "Store its address using &.",
      "Use *p to read the value."
    ],
    "explanation": "A pointer stores an address and dereferencing accesses the object at that address.",
    "mode": "full"
  },
  {
    "id": "EX031",
    "topic": "Pointers and Pointer Arithmetic",
    "subtopic": "Pointer Write",
    "difficulty": "Easy-Medium",
    "title": "Modify a Variable Using a Pointer",
    "statement": "Read an original value and a replacement value. Modify the original variable by dereferencing its pointer, then print the updated value.",
    "inputFormat": "Two integers: original and replacement.",
    "outputFormat": "Print the updated original variable.",
    "constraints": "Values fit in a signed 32-bit integer.",
    "samples": [
      {
        "input": "5 12\n",
        "output": "12"
      },
      {
        "input": "-3 7\n",
        "output": "7"
      }
    ],
    "tests": [
      {
        "input": "5 12\n",
        "expected": "12"
      },
      {
        "input": "-3 7\n",
        "expected": "7"
      },
      {
        "input": "0 0\n",
        "expected": "0"
      },
      {
        "input": "99 -99\n",
        "expected": "-99"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int x,v;cin>>x>>v;int *p=&x;*p=v;cout<<x;return 0;}",
    "hints": [
      "Create a pointer to x.",
      "Assign the new value through *p.",
      "Print x to confirm that it changed."
    ],
    "explanation": "Writing through the pointer updates the original variable.",
    "mode": "full"
  },
  {
    "id": "EX032",
    "topic": "Pointers and Pointer Arithmetic",
    "subtopic": "Array Traversal",
    "difficulty": "Medium",
    "title": "Traverse an Array Using Pointers",
    "statement": "Display array elements using pointer arithmetic. Do not use ordinary array indexing in the display loop.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "4\n3 6 9 12\n",
        "output": "3 6 9 12"
      },
      {
        "input": "1\n-5\n",
        "output": "-5"
      }
    ],
    "tests": [
      {
        "input": "4\n3 6 9 12\n",
        "expected": "3 6 9 12"
      },
      {
        "input": "1\n-5\n",
        "expected": "-5"
      },
      {
        "input": "5\n0 -1 2 -3 4\n",
        "expected": "0 -1 2 -3 4"
      },
      {
        "input": "3\n7 7 7\n",
        "expected": "7 7 7"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];int *p=a;for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<*(p+i);}return 0;}",
    "hints": [
      "The array name gives the address of its first element.",
      "Pointer addition advances by elements of the pointed type.",
      "Access element i with *(p+i)."
    ],
    "explanation": "Pointer arithmetic traverses the array without the a[i] expression.",
    "mode": "full"
  },
  {
    "id": "EX033",
    "topic": "Pointers and Pointer Arithmetic",
    "subtopic": "Pointer-Based Sum",
    "difficulty": "Medium",
    "title": "Sum Array Elements Using Pointers",
    "statement": "Calculate the sum of an array using pointer arithmetic for traversal after input.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the sum of all elements.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "4\n3 5 2 7\n",
        "output": "17"
      },
      {
        "input": "1\n-4\n",
        "output": "-4"
      }
    ],
    "tests": [
      {
        "input": "4\n3 5 2 7\n",
        "expected": "17"
      },
      {
        "input": "1\n-4\n",
        "expected": "-4"
      },
      {
        "input": "5\n-1 -2 -3 -4 -5\n",
        "expected": "-15"
      },
      {
        "input": "3\n0 0 0\n",
        "expected": "0"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],sum=0;cin>>n;for(int i=0;i<n;i++)cin>>a[i];int *p=a;for(int i=0;i<n;i++)sum+=*(p+i);cout<<sum;return 0;}",
    "hints": [
      "Create a pointer to the first array element.",
      "Use *(p+i) for the current value.",
      "Add every value to the running sum."
    ],
    "explanation": "The sum loop uses pointer arithmetic rather than ordinary array indexing.",
    "mode": "full"
  },
  {
    "id": "EX034",
    "topic": "Pointers and Pointer Arithmetic",
    "subtopic": "Pointer-Based Maximum",
    "difficulty": "Medium-Hard",
    "title": "Find the Largest Element Using Pointers",
    "statement": "Find the maximum array element using pointer arithmetic. Do not use ordinary array indexing in the search loop.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the maximum element.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "4\n-8 -2 -5 -9\n",
        "output": "-2"
      },
      {
        "input": "1\n6\n",
        "output": "6"
      }
    ],
    "tests": [
      {
        "input": "4\n-8 -2 -5 -9\n",
        "expected": "-2"
      },
      {
        "input": "1\n6\n",
        "expected": "6"
      },
      {
        "input": "5\n2 10 3 10 4\n",
        "expected": "10"
      },
      {
        "input": "3\n-12 -4 -8\n",
        "expected": "-4"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];int *p=a,largest=*p;for(int i=1;i<n;i++)if(*(p+i)>largest)largest=*(p+i);cout<<largest;return 0;}",
    "hints": [
      "Initialize maximum by dereferencing the first pointer position.",
      "Compare *(p+i) with the current maximum.",
      "Update the maximum when a larger value appears."
    ],
    "explanation": "Initializing from the first element works for all-negative arrays.",
    "mode": "full"
  },
  {
    "id": "EX035",
    "topic": "Pointers and Pointer Arithmetic",
    "subtopic": "Pointer Function",
    "difficulty": "Hard",
    "title": "Swap Two Numbers Using Pointers",
    "statement": "Write a function that swaps two integers using pointer arguments. Read two values, call the function, and print the swapped values.",
    "inputFormat": "Two integers a and b.",
    "outputFormat": "Print swapped values separated by a space.",
    "constraints": "The swap function must receive int pointers.",
    "samples": [
      {
        "input": "4 9\n",
        "output": "9 4"
      },
      {
        "input": "1 1\n",
        "output": "1 1"
      }
    ],
    "tests": [
      {
        "input": "4 9\n",
        "expected": "9 4"
      },
      {
        "input": "1 1\n",
        "expected": "1 1"
      },
      {
        "input": "-3 8\n",
        "expected": "8 -3"
      },
      {
        "input": "0 -7\n",
        "expected": "-7 0"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nvoid swapValues(int *a,int *b){int temp=*a;*a=*b;*b=temp;}\nint main(){int a,b;cin>>a>>b;swapValues(&a,&b);cout<<a<<\" \"<<b;return 0;}",
    "hints": [
      "Pass the addresses of both variables.",
      "Save *a in a temporary variable.",
      "Write the opposite values through the pointers."
    ],
    "explanation": "Pointer arguments allow the function to modify the caller's original integers.",
    "mode": "full"
  },
  {
    "id": "EX036",
    "topic": "Pointers and Pointer Arithmetic",
    "subtopic": "In-place Pointer Reversal",
    "difficulty": "Hard / Examination Level",
    "title": "Reverse an Array Using Pointers",
    "statement": "Reverse an array using pointer arithmetic without another array. Use two pointers that move inward and swap the values they point to.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "5\n1 2 3 4 5\n",
        "output": "5 4 3 2 1"
      },
      {
        "input": "1\n6\n",
        "output": "6"
      }
    ],
    "tests": [
      {
        "input": "5\n1 2 3 4 5\n",
        "expected": "5 4 3 2 1"
      },
      {
        "input": "1\n6\n",
        "expected": "6"
      },
      {
        "input": "4\n-1 0 5 2\n",
        "expected": "2 5 0 -1"
      },
      {
        "input": "6\n8 3 3 1 0 -2\n",
        "expected": "-2 0 1 3 3 8"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];int *left=a,*right=a+n-1;while(left<right){int temp=*left;*left=*right;*right=temp;left++;right--;}for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<*(a+i);}return 0;}",
    "hints": [
      "Point left at the first element and right at the last.",
      "Swap through dereferencing.",
      "Advance left and decrement right."
    ],
    "explanation": "Two pointers reverse the array in place with O(1) additional memory.",
    "mode": "full"
  },
  {
    "id": "EX037",
    "topic": "Pointer to Pointer and Arrays of Pointers",
    "subtopic": "Double Pointer Basics",
    "difficulty": "Easy",
    "title": "Basic Pointer to Pointer",
    "statement": "Declare an integer, a pointer to it, and a pointer to that pointer. Display the original value using double dereferencing.",
    "inputFormat": "One integer x.",
    "outputFormat": "Print the original value using **pp.",
    "constraints": "Input value fits in a signed 32-bit integer.",
    "samples": [
      {
        "input": "25\n",
        "output": "25"
      },
      {
        "input": "-9\n",
        "output": "-9"
      }
    ],
    "tests": [
      {
        "input": "25\n",
        "expected": "25"
      },
      {
        "input": "-9\n",
        "expected": "-9"
      },
      {
        "input": "0\n",
        "expected": "0"
      },
      {
        "input": "1234\n",
        "expected": "1234"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int x;cin>>x;int *p=&x;int **pp=&p;cout<<**pp;return 0;}",
    "hints": [
      "Make p point to x.",
      "Make pp point to p.",
      "Use **pp to follow both pointer levels."
    ],
    "explanation": "A pointer-to-pointer stores the address of another pointer.",
    "mode": "full"
  },
  {
    "id": "EX038",
    "topic": "Pointer to Pointer and Arrays of Pointers",
    "subtopic": "Double Pointer Write",
    "difficulty": "Easy-Medium",
    "title": "Modify a Variable Using a Double Pointer",
    "statement": "Read an original integer and a replacement value. Modify the original through a pointer to pointer and print it.",
    "inputFormat": "Two integers: original and replacement.",
    "outputFormat": "Print the updated original value.",
    "constraints": "Values fit in a signed 32-bit integer.",
    "samples": [
      {
        "input": "10 99\n",
        "output": "99"
      },
      {
        "input": "-5 0\n",
        "output": "0"
      }
    ],
    "tests": [
      {
        "input": "10 99\n",
        "expected": "99"
      },
      {
        "input": "-5 0\n",
        "expected": "0"
      },
      {
        "input": "0 -12\n",
        "expected": "-12"
      },
      {
        "input": "8 8\n",
        "expected": "8"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int x,v;cin>>x>>v;int *p=&x;int **pp=&p;**pp=v;cout<<x;return 0;}",
    "hints": [
      "Create p to point to x.",
      "Create pp to point to p.",
      "Write the replacement through **pp."
    ],
    "explanation": "Double dereferencing reaches and updates the original integer.",
    "mode": "full"
  },
  {
    "id": "EX039",
    "topic": "Pointer to Pointer and Arrays of Pointers",
    "subtopic": "Array of Pointers",
    "difficulty": "Medium",
    "title": "Array of Pointers",
    "statement": "Create an array of three pointers, each pointing to a different integer variable. Display the values through the pointers.",
    "inputFormat": "Three integers a, b, and c.",
    "outputFormat": "Print the three values in input order.",
    "constraints": "Each value fits in a signed 32-bit integer.",
    "samples": [
      {
        "input": "4 8 12\n",
        "output": "4 8 12"
      },
      {
        "input": "-1 0 7\n",
        "output": "-1 0 7"
      }
    ],
    "tests": [
      {
        "input": "4 8 12\n",
        "expected": "4 8 12"
      },
      {
        "input": "-1 0 7\n",
        "expected": "-1 0 7"
      },
      {
        "input": "5 5 5\n",
        "expected": "5 5 5"
      },
      {
        "input": "9 -3 2\n",
        "expected": "9 -3 2"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int a,b,c;cin>>a>>b>>c;int *p[3]={&a,&b,&c};for(int i=0;i<3;i++){if(i)cout<<\" \";cout<<*p[i];}return 0;}",
    "hints": [
      "Declare the integer variables first.",
      "Store each variable's address in a pointer-array element.",
      "Dereference each pointer while displaying."
    ],
    "explanation": "An array of pointers stores multiple addresses rather than integer values.",
    "mode": "full"
  },
  {
    "id": "EX040",
    "topic": "Pointer to Pointer and Arrays of Pointers",
    "subtopic": "Updating Through Pointer Array",
    "difficulty": "Medium-Hard",
    "title": "Update Values Using an Array of Pointers",
    "statement": "Read N integers and a delta. Store addresses of the integers in an array of pointers, add delta through each pointer, and display the updated values.",
    "inputFormat": "N, N integers, then delta.",
    "outputFormat": "Print updated array values separated by spaces.",
    "constraints": "1 <= N <= 1000. Updated values fit in signed 32-bit integers.",
    "samples": [
      {
        "input": "3\n2 4 6\n5\n",
        "output": "7 9 11"
      },
      {
        "input": "1\n-8\n3\n",
        "output": "-5"
      }
    ],
    "tests": [
      {
        "input": "3\n2 4 6\n5\n",
        "expected": "7 9 11"
      },
      {
        "input": "1\n-8\n3\n",
        "expected": "-5"
      },
      {
        "input": "4\n0 0 0 0\n-2\n",
        "expected": "-2 -2 -2 -2"
      },
      {
        "input": "3\n10 -10 5\n0\n",
        "expected": "10 -10 5"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,a[1000],*p[1000],d;cin>>n;for(int i=0;i<n;i++){cin>>a[i];p[i]=&a[i];}cin>>d;for(int i=0;i<n;i++)*p[i]+=d;for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<a[i];}return 0;}",
    "hints": [
      "Store &a[i] in p[i].",
      "After reading delta, update through *p[i].",
      "Print the original array after the indirect updates."
    ],
    "explanation": "Pointer-array entries give indirect writable access to the original variables.",
    "mode": "full"
  },
  {
    "id": "EX041",
    "topic": "Pointer to Pointer and Arrays of Pointers",
    "subtopic": "Dynamic Array via Double Pointer",
    "difficulty": "Hard",
    "title": "Access a Dynamically Allocated Array Through a Pointer to Pointer",
    "statement": "Allocate an array dynamically, point to it with an int pointer, and access its elements through an int pointer to pointer. Print the sum and release the array.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the sum of all allocated array elements.",
    "constraints": "1 <= N <= 1000. Use new[] and matching delete[].",
    "samples": [
      {
        "input": "4\n2 3 5 7\n",
        "output": "17"
      },
      {
        "input": "1\n-9\n",
        "output": "-9"
      }
    ],
    "tests": [
      {
        "input": "4\n2 3 5 7\n",
        "expected": "17"
      },
      {
        "input": "1\n-9\n",
        "expected": "-9"
      },
      {
        "input": "3\n0 0 0\n",
        "expected": "0"
      },
      {
        "input": "5\n-1 2 -3 4 -5\n",
        "expected": "-3"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n,sum=0;cin>>n;int *data=new int[n];int **pp=&data;for(int i=0;i<n;i++){cin>>(*pp)[i];sum+=(*pp)[i];}cout<<sum;delete[] data;return 0;}",
    "hints": [
      "Allocate N integers using new[].",
      "Create pp to point to the array pointer.",
      "Use (*pp)[i] to access elements and delete[] to free memory."
    ],
    "explanation": "The expression (*pp)[i] first obtains the array pointer, then accesses element i.",
    "mode": "full"
  },
  {
    "id": "EX042",
    "topic": "Pointer to Pointer and Arrays of Pointers",
    "subtopic": "Dynamic Matrix",
    "difficulty": "Hard",
    "title": "Dynamic Matrix Using Double Pointer",
    "statement": "Create an R x C matrix dynamically using int**. Read and display it, then release every row and the row-pointer array.",
    "inputFormat": "Rows R and columns C, followed by R rows containing C integers.",
    "outputFormat": "Print the resulting matrix, one row per line, with elements separated by spaces.",
    "constraints": "1 <= R,C <= 50. Use new[] and matching delete[].",
    "samples": [
      {
        "input": "2 3\n1 2 3\n4 5 6\n",
        "output": "1 2 3\n4 5 6"
      },
      {
        "input": "1 1\n-7\n",
        "output": "-7"
      }
    ],
    "tests": [
      {
        "input": "2 3\n1 2 3\n4 5 6\n",
        "expected": "1 2 3\n4 5 6"
      },
      {
        "input": "1 1\n-7\n",
        "expected": "-7"
      },
      {
        "input": "3 2\n0 1\n2 3\n4 5\n",
        "expected": "0 1\n2 3\n4 5"
      },
      {
        "input": "2 2\n9 8\n7 6\n",
        "expected": "9 8\n7 6"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int r,c;cin>>r>>c;int **p=new int*[r];for(int i=0;i<r;i++)p[i]=new int[c];for(int i=0;i<r;i++)for(int k=0;k<c;k++)cin>>p[i][k];for(int i=0;i<r;i++){for(int k=0;k<c;k++){if(k)cout<<\" \";cout<<p[i][k];}if(i+1<r)cout<<\"\\n\";}for(int i=0;i<r;i++)delete[] p[i];delete[] p;return 0;}",
    "hints": [
      "Allocate an array of row pointers first.",
      "Allocate C integers for each row.",
      "Delete each row before deleting the row-pointer array."
    ],
    "explanation": "A dynamically allocated matrix using int** requires deleting every row and the pointer array.",
    "mode": "full"
  },
  {
    "id": "EX043",
    "topic": "Pointer to Pointer and Arrays of Pointers",
    "subtopic": "Double-Pointer Matrix Challenge",
    "difficulty": "Examination Challenge",
    "title": "Row Sums of a Dynamic Matrix Using Double Pointer",
    "statement": "Create an R x C matrix dynamically using int**. Calculate each row sum and display all row sums. Release all allocated memory.",
    "inputFormat": "Rows R and columns C, followed by R rows containing C integers.",
    "outputFormat": "Print R row sums on one line, separated by spaces.",
    "constraints": "1 <= R,C <= 50. Use new[] and matching delete[].",
    "samples": [
      {
        "input": "2 3\n1 2 3\n4 5 6\n",
        "output": "6 15"
      },
      {
        "input": "1 1\n-5\n",
        "output": "-5"
      }
    ],
    "tests": [
      {
        "input": "2 3\n1 2 3\n4 5 6\n",
        "expected": "6 15"
      },
      {
        "input": "1 1\n-5\n",
        "expected": "-5"
      },
      {
        "input": "3 2\n1 1\n0 0\n-2 4\n",
        "expected": "2 0 2"
      },
      {
        "input": "2 2\n100 -100\n-7 -8\n",
        "expected": "0 -15"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int r,c;cin>>r>>c;int **p=new int*[r];for(int i=0;i<r;i++)p[i]=new int[c];for(int i=0;i<r;i++)for(int k=0;k<c;k++)cin>>p[i][k];for(int i=0;i<r;i++){int sum=0;for(int k=0;k<c;k++)sum+=p[i][k];if(i)cout<<\" \";cout<<sum;}for(int i=0;i<r;i++)delete[] p[i];delete[] p;return 0;}",
    "hints": [
      "Use a separate sum for each row.",
      "Finish the row traversal before printing its sum.",
      "Release all rows and then the row pointer array."
    ],
    "explanation": "This combines dynamic double-pointer matrix allocation with row-wise aggregation.",
    "mode": "full"
  },
  {
    "id": "EX044",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "Single Integer Allocation",
    "difficulty": "Easy",
    "title": "Dynamically Allocate a Single Integer",
    "statement": "Allocate one integer using new, read a value into it, display it, and free it using delete.",
    "inputFormat": "One integer value.",
    "outputFormat": "Print the entered value.",
    "constraints": "Use new for one integer and delete for the same allocation.",
    "samples": [
      {
        "input": "14\n",
        "output": "14"
      },
      {
        "input": "-6\n",
        "output": "-6"
      }
    ],
    "tests": [
      {
        "input": "14\n",
        "expected": "14"
      },
      {
        "input": "-6\n",
        "expected": "-6"
      },
      {
        "input": "0\n",
        "expected": "0"
      },
      {
        "input": "1000\n",
        "expected": "1000"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int *p=new int;cin>>*p;cout<<*p;delete p;return 0;}",
    "hints": [
      "Use new int to allocate a single integer.",
      "Read into *p.",
      "Use delete p, not delete[] p."
    ],
    "explanation": "A single object allocated with new is released using delete.",
    "mode": "full"
  },
  {
    "id": "EX045",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "Dynamic 1D Array",
    "difficulty": "Easy",
    "title": "Dynamic Array Creation",
    "statement": "Read N, allocate N integers using new[], read and display the elements, and release the array.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use new[] and matching delete[].",
    "samples": [
      {
        "input": "4\n1 2 3 4\n",
        "output": "1 2 3 4"
      },
      {
        "input": "1\n-9\n",
        "output": "-9"
      }
    ],
    "tests": [
      {
        "input": "4\n1 2 3 4\n",
        "expected": "1 2 3 4"
      },
      {
        "input": "1\n-9\n",
        "expected": "-9"
      },
      {
        "input": "3\n0 5 0\n",
        "expected": "0 5 0"
      },
      {
        "input": "5\n-1 -2 -3 -4 -5\n",
        "expected": "-1 -2 -3 -4 -5"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n;cin>>n;int *p=new int[n];for(int i=0;i<n;i++)cin>>p[i];for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<p[i];}delete[] p;return 0;}",
    "hints": [
      "Allocate after reading N.",
      "Use pointer indexing to access the allocated block.",
      "Release it with delete[]."
    ],
    "explanation": "The allocation uses new[] so the matching deallocation is delete[].",
    "mode": "full"
  },
  {
    "id": "EX046",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "Dynamic Array Aggregation",
    "difficulty": "Easy-Medium",
    "title": "Sum and Average Using Dynamic Memory",
    "statement": "Allocate an array dynamically, calculate its sum and average, and print the average to two decimal places.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print sum and average with exactly two decimal places.",
    "constraints": "1 <= N <= 1000. Use new[] and delete[].",
    "samples": [
      {
        "input": "4\n2 4 6 8\n",
        "output": "20 5.00"
      },
      {
        "input": "3\n1 2 2\n",
        "output": "5 1.67"
      }
    ],
    "tests": [
      {
        "input": "4\n2 4 6 8\n",
        "expected": "20 5.00"
      },
      {
        "input": "3\n1 2 2\n",
        "expected": "5 1.67"
      },
      {
        "input": "1\n-9\n",
        "expected": "-9 -9.00"
      },
      {
        "input": "5\n-2 -1 0 1 2\n",
        "expected": "0 0.00"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main(){int n,sum=0;cin>>n;int *p=new int[n];for(int i=0;i<n;i++){cin>>p[i];sum+=p[i];}cout<<sum<<\" \"<<fixed<<setprecision(2)<<(double)sum/n;delete[] p;return 0;}",
    "hints": [
      "Accumulate the sum as values are read.",
      "Cast the sum to double before division.",
      "Remember delete[] after the calculation."
    ],
    "explanation": "Floating-point division preserves fractional parts in the average.",
    "mode": "full"
  },
  {
    "id": "EX047",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "Dynamic Array Min and Max",
    "difficulty": "Medium",
    "title": "Find Maximum and Minimum Using Dynamic Memory",
    "statement": "Find the largest and smallest values in a dynamically allocated array. Print maximum followed by minimum and release the array.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print maximum and minimum separated by a space.",
    "constraints": "1 <= N <= 1000. Use new[] and delete[].",
    "samples": [
      {
        "input": "5\n8 -4 2 11 3\n",
        "output": "11 -4"
      },
      {
        "input": "3\n-9 -2 -7\n",
        "output": "-2 -9"
      }
    ],
    "tests": [
      {
        "input": "5\n8 -4 2 11 3\n",
        "expected": "11 -4"
      },
      {
        "input": "3\n-9 -2 -7\n",
        "expected": "-2 -9"
      },
      {
        "input": "1\n42\n",
        "expected": "42 42"
      },
      {
        "input": "4\n0 0 0 0\n",
        "expected": "0 0"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n;cin>>n;int *p=new int[n];for(int i=0;i<n;i++)cin>>p[i];int largest=p[0],smallest=p[0];for(int i=1;i<n;i++){if(p[i]>largest)largest=p[i];if(p[i]<smallest)smallest=p[i];}cout<<largest<<\" \"<<smallest;delete[] p;return 0;}",
    "hints": [
      "Initialize both values from p[0].",
      "Scan the remaining dynamic array.",
      "Release the allocated memory after printing."
    ],
    "explanation": "Starting from the first element handles arrays containing only negative values.",
    "mode": "full"
  },
  {
    "id": "EX048",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "Dynamic Array Reversal",
    "difficulty": "Medium-Hard",
    "title": "Reverse a Dynamically Allocated Array",
    "statement": "Allocate an array using new[], reverse it in place without allocating another array, display it, and free the memory.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the required values separated by single spaces.",
    "constraints": "1 <= N <= 1000. Use new[] and delete[].",
    "samples": [
      {
        "input": "5\n1 2 3 4 5\n",
        "output": "5 4 3 2 1"
      },
      {
        "input": "1\n6\n",
        "output": "6"
      }
    ],
    "tests": [
      {
        "input": "5\n1 2 3 4 5\n",
        "expected": "5 4 3 2 1"
      },
      {
        "input": "1\n6\n",
        "expected": "6"
      },
      {
        "input": "4\n-1 0 5 2\n",
        "expected": "2 5 0 -1"
      },
      {
        "input": "6\n8 3 3 1 0 -2\n",
        "expected": "-2 0 1 3 3 8"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int n;cin>>n;int *p=new int[n];for(int i=0;i<n;i++)cin>>p[i];int left=0,right=n-1;while(left<right){int temp=p[left];p[left]=p[right];p[right]=temp;left++;right--;}for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<p[i];}delete[] p;return 0;}",
    "hints": [
      "Use two indices at the ends of the dynamic array.",
      "Swap values while the indices move inward.",
      "Use delete[] when finished."
    ],
    "explanation": "The reversal is in place and the original dynamic block is released correctly.",
    "mode": "full"
  },
  {
    "id": "EX049",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "Dynamic 2D Matrix",
    "difficulty": "Hard",
    "title": "Dynamic Two-Dimensional Matrix and Sum",
    "statement": "Create an R x C matrix dynamically using int**. Read it, calculate the sum of its elements, print the sum, and release every allocation.",
    "inputFormat": "Rows R and columns C, followed by R rows containing C integers.",
    "outputFormat": "Print the sum of all matrix elements.",
    "constraints": "1 <= R,C <= 50. Use new[] and delete[] for all allocations.",
    "samples": [
      {
        "input": "2 2\n1 2\n3 4\n",
        "output": "10"
      },
      {
        "input": "1 1\n-7\n",
        "output": "-7"
      }
    ],
    "tests": [
      {
        "input": "2 2\n1 2\n3 4\n",
        "expected": "10"
      },
      {
        "input": "1 1\n-7\n",
        "expected": "-7"
      },
      {
        "input": "2 3\n1 0 -1\n2 3 4\n",
        "expected": "9"
      },
      {
        "input": "3 1\n5\n0\n-2\n",
        "expected": "3"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int r,c,sum=0;cin>>r>>c;int **p=new int*[r];for(int i=0;i<r;i++)p[i]=new int[c];for(int i=0;i<r;i++)for(int k=0;k<c;k++){cin>>p[i][k];sum+=p[i][k];}cout<<sum;for(int i=0;i<r;i++)delete[] p[i];delete[] p;return 0;}",
    "hints": [
      "Allocate the row pointers before the rows.",
      "Accumulate while reading the elements.",
      "Delete every row, then the pointer array."
    ],
    "explanation": "Every nested allocation has a matching delete[].",
    "mode": "full"
  },
  {
    "id": "EX050",
    "topic": "Dynamic Memory Allocation",
    "subtopic": "Dynamic Matrix Multiplication",
    "difficulty": "Hard / Examination Level",
    "title": "Dynamic Matrix Multiplication",
    "statement": "Dynamically allocate two matrices, multiply them when dimensions are compatible, display the result, and release every allocation. Print Invalid if incompatible.",
    "inputFormat": "R1 C1, matrix A, R2 C2, matrix B.",
    "outputFormat": "Print Invalid if C1 != R2; otherwise print the R1 x C2 product.",
    "constraints": "1 <= dimensions <= 30. Use new[] and delete[] for all allocations.",
    "samples": [
      {
        "input": "2 2\n1 2\n3 4\n2 2\n5 6\n7 8\n",
        "output": "19 22\n43 50"
      },
      {
        "input": "1 2\n1 2\n2 1\n3\n4\n",
        "output": "11"
      }
    ],
    "tests": [
      {
        "input": "2 2\n1 2\n3 4\n2 2\n5 6\n7 8\n",
        "expected": "19 22\n43 50"
      },
      {
        "input": "1 2\n1 2\n2 1\n3\n4\n",
        "expected": "11"
      },
      {
        "input": "2 3\n1 2 3\n4 5 6\n2 2\n1 0\n0 1\n",
        "expected": "Invalid"
      },
      {
        "input": "1 1\n-3\n1 1\n4\n",
        "expected": "-12"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint main(){int r1,c1,r2,c2;cin>>r1>>c1;int **a=new int*[r1];for(int i=0;i<r1;i++)a[i]=new int[c1];for(int i=0;i<r1;i++)for(int k=0;k<c1;k++)cin>>a[i][k];cin>>r2>>c2;int **b=new int*[r2];for(int i=0;i<r2;i++)b[i]=new int[c2];for(int i=0;i<r2;i++)for(int k=0;k<c2;k++)cin>>b[i][k];if(c1!=r2)cout<<\"Invalid\";else{int **z=new int*[r1];for(int i=0;i<r1;i++)z[i]=new int[c2];for(int i=0;i<r1;i++)for(int k=0;k<c2;k++){z[i][k]=0;for(int t=0;t<c1;t++)z[i][k]+=a[i][t]*b[t][k];}for(int i=0;i<r1;i++){for(int k=0;k<c2;k++){if(k)cout<<\" \";cout<<z[i][k];}if(i+1<r1)cout<<\"\\n\";}for(int i=0;i<r1;i++)delete[] z[i];delete[] z;}for(int i=0;i<r1;i++)delete[] a[i];delete[] a;for(int i=0;i<r2;i++)delete[] b[i];delete[] b;return 0;}",
    "hints": [
      "Allocate each matrix and each row separately.",
      "Check C1 == R2 before multiplication.",
      "Release every result row, then each input matrix row and pointer array."
    ],
    "explanation": "Every row allocated with new[] is freed with delete[]; each pointer array is freed last.",
    "mode": "full"
  },
  {
    "id": "EX051",
    "topic": "Functions and Modular Programming",
    "subtopic": "Return Value",
    "difficulty": "Easy",
    "title": "Sum Using a User-Defined Function",
    "statement": "Write a function that accepts two integers and returns their sum. Call it from main and print the result.",
    "inputFormat": "Two integers a and b.",
    "outputFormat": "Print their sum.",
    "constraints": "Input values and the sum fit in a signed 32-bit integer.",
    "samples": [
      {
        "input": "3 5\n",
        "output": "8"
      },
      {
        "input": "-4 10\n",
        "output": "6"
      }
    ],
    "tests": [
      {
        "input": "3 5\n",
        "expected": "8"
      },
      {
        "input": "-4 10\n",
        "expected": "6"
      },
      {
        "input": "0 0\n",
        "expected": "0"
      },
      {
        "input": "-7 -8\n",
        "expected": "-15"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint add(int a,int b);\nint main(){int a,b;cin>>a>>b;cout<<add(a,b);return 0;}\nint add(int a,int b){return a+b;}",
    "hints": [
      "Declare a function with two integer parameters.",
      "Use int as its return type.",
      "Call the function from main."
    ],
    "explanation": "The addition is isolated in a function that returns the computed sum.",
    "mode": "full"
  },
  {
    "id": "EX052",
    "topic": "Functions and Modular Programming",
    "subtopic": "Maximum Function",
    "difficulty": "Easy-Medium",
    "title": "Largest of Three Numbers Using a Function",
    "statement": "Create a function that accepts three integers and returns the largest. Read values in main and print the result.",
    "inputFormat": "Three integers a, b, and c.",
    "outputFormat": "Print the largest value.",
    "constraints": "Values fit in a signed 32-bit integer.",
    "samples": [
      {
        "input": "4 9 2\n",
        "output": "9"
      },
      {
        "input": "-5 -2 -8\n",
        "output": "-2"
      }
    ],
    "tests": [
      {
        "input": "4 9 2\n",
        "expected": "9"
      },
      {
        "input": "-5 -2 -8\n",
        "expected": "-2"
      },
      {
        "input": "7 7 3\n",
        "expected": "7"
      },
      {
        "input": "0 -1 0\n",
        "expected": "0"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint largestOfThree(int a,int b,int c);\nint main(){int a,b,c;cin>>a>>b>>c;cout<<largestOfThree(a,b,c);return 0;}\nint largestOfThree(int a,int b,int c){int largest=a;if(b>largest)largest=b;if(c>largest)largest=c;return largest;}",
    "hints": [
      "Start with a as the current maximum.",
      "Compare b and c with that maximum.",
      "Return the final value."
    ],
    "explanation": "The function determines the maximum independently of main.",
    "mode": "full"
  },
  {
    "id": "EX053",
    "topic": "Functions and Modular Programming",
    "subtopic": "Prime Check Function",
    "difficulty": "Medium",
    "title": "Check Prime Number Using a Function",
    "statement": "Write a function that returns whether an integer is prime. Values smaller than 2 are not prime. Print YES or NO.",
    "inputFormat": "One integer N.",
    "outputFormat": "Print YES for a prime number and NO otherwise.",
    "constraints": "0 <= N <= 1000000000.",
    "samples": [
      {
        "input": "17\n",
        "output": "YES"
      },
      {
        "input": "1\n",
        "output": "NO"
      }
    ],
    "tests": [
      {
        "input": "17\n",
        "expected": "YES"
      },
      {
        "input": "1\n",
        "expected": "NO"
      },
      {
        "input": "2\n",
        "expected": "YES"
      },
      {
        "input": "49\n",
        "expected": "NO"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint isPrime(int n);\nint main(){int n;cin>>n;cout<<(isPrime(n)?\"YES\":\"NO\");return 0;}\nint isPrime(int n){if(n<2)return 0;for(int i=2;i*i<=n;i++)if(n%i==0)return 0;return 1;}",
    "hints": [
      "Reject all values below 2.",
      "Test possible divisors from 2.",
      "Stop when i*i becomes greater than N."
    ],
    "explanation": "A composite number has a divisor no greater than its square root.",
    "mode": "full"
  },
  {
    "id": "EX054",
    "topic": "Functions and Modular Programming",
    "subtopic": "Array Parameter",
    "difficulty": "Medium-Hard",
    "title": "Array Sum Using a Function",
    "statement": "Pass an array and its size to a function. The function must calculate and return the sum of its elements.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print the array sum.",
    "constraints": "1 <= N <= 1000. Use standard input and output. Do not hardcode sample values.",
    "samples": [
      {
        "input": "4\n1 2 3 4\n",
        "output": "10"
      },
      {
        "input": "1\n-9\n",
        "output": "-9"
      }
    ],
    "tests": [
      {
        "input": "4\n1 2 3 4\n",
        "expected": "10"
      },
      {
        "input": "1\n-9\n",
        "expected": "-9"
      },
      {
        "input": "5\n-1 -2 0 2 1\n",
        "expected": "0"
      },
      {
        "input": "3\n100 200 300\n",
        "expected": "600"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint arraySum(int a[],int n);\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];cout<<arraySum(a,n);return 0;}\nint arraySum(int a[],int n){int sum=0;for(int i=0;i<n;i++)sum+=a[i];return sum;}",
    "hints": [
      "Pass both the array and its size.",
      "Perform the summation inside the function.",
      "Return the sum to main."
    ],
    "explanation": "The size parameter tells the function how many elements to process.",
    "mode": "full"
  },
  {
    "id": "EX055",
    "topic": "Functions and Modular Programming",
    "subtopic": "Call by Value",
    "difficulty": "Medium-Hard",
    "title": "Demonstrate Call by Value",
    "statement": "Write a function that adds 10 to its integer parameter using call by value. Print the original variable from main after the call to show it remains unchanged.",
    "inputFormat": "One integer x.",
    "outputFormat": "Print x after the function call; it must remain unchanged.",
    "constraints": "Input plus 10 fits in a signed 32-bit integer.",
    "samples": [
      {
        "input": "5\n",
        "output": "5"
      },
      {
        "input": "-7\n",
        "output": "-7"
      }
    ],
    "tests": [
      {
        "input": "5\n",
        "expected": "5"
      },
      {
        "input": "-7\n",
        "expected": "-7"
      },
      {
        "input": "0\n",
        "expected": "0"
      },
      {
        "input": "100\n",
        "expected": "100"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nvoid change(int x);\nint main(){int a;cin>>a;change(a);cout<<a;return 0;}\nvoid change(int x){x=x+10;}",
    "hints": [
      "The function parameter receives a copy.",
      "Modify only the local parameter.",
      "Print the original variable after the call."
    ],
    "explanation": "Call by value passes a copy, so the caller's variable remains unchanged.",
    "mode": "full"
  },
  {
    "id": "EX056",
    "topic": "Functions and Modular Programming",
    "subtopic": "Call by Reference",
    "difficulty": "Hard",
    "title": "Swap Two Numbers Using Call by Reference",
    "statement": "Write a function that swaps two integers using reference parameters. Read two values, call the function, and print the swapped values.",
    "inputFormat": "Two integers a and b.",
    "outputFormat": "Print swapped values separated by a space.",
    "constraints": "The function must use int reference parameters.",
    "samples": [
      {
        "input": "4 9\n",
        "output": "9 4"
      },
      {
        "input": "1 1\n",
        "output": "1 1"
      }
    ],
    "tests": [
      {
        "input": "4 9\n",
        "expected": "9 4"
      },
      {
        "input": "1 1\n",
        "expected": "1 1"
      },
      {
        "input": "-3 8\n",
        "expected": "8 -3"
      },
      {
        "input": "0 -7\n",
        "expected": "-7 0"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nvoid swapValues(int &a,int &b);\nint main(){int a,b;cin>>a>>b;swapValues(a,b);cout<<a<<\" \"<<b;return 0;}\nvoid swapValues(int &a,int &b){int temp=a;a=b;b=temp;}",
    "hints": [
      "Use & in both function parameters.",
      "Reference parameters refer to caller variables.",
      "Use a temporary value to complete the swap."
    ],
    "explanation": "Call by reference allows a function to modify the caller's original variables.",
    "mode": "full"
  },
  {
    "id": "EX057",
    "topic": "Functions and Modular Programming",
    "subtopic": "Function Prototypes and Modular Analysis",
    "difficulty": "Examination Level",
    "title": "Modular Array Analysis",
    "statement": "Create separate functions to calculate sum, maximum, minimum, and average. Use function prototypes before main and call each from main. Print average to two decimal places.",
    "inputFormat": "N followed by N integers.",
    "outputFormat": "Print sum, maximum, minimum, average (two decimal places).",
    "constraints": "1 <= N <= 1000. Use prototypes and separate function definitions.",
    "samples": [
      {
        "input": "4\n1 2 3 4\n",
        "output": "10 4 1 2.50"
      },
      {
        "input": "1\n-5\n",
        "output": "-5 -5 -5 -5.00"
      }
    ],
    "tests": [
      {
        "input": "4\n1 2 3 4\n",
        "expected": "10 4 1 2.50"
      },
      {
        "input": "1\n-5\n",
        "expected": "-5 -5 -5 -5.00"
      },
      {
        "input": "3\n-2 0 5\n",
        "expected": "3 5 -2 1.00"
      },
      {
        "input": "5\n2 2 2 2 2\n",
        "expected": "10 2 2 2.00"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint findSum(int a[],int n);\nint findMax(int a[],int n);\nint findMin(int a[],int n);\ndouble findAverage(int a[],int n);\nint main(){int n,a[1000];cin>>n;for(int i=0;i<n;i++)cin>>a[i];cout<<findSum(a,n)<<\" \"<<findMax(a,n)<<\" \"<<findMin(a,n)<<\" \"<<fixed<<setprecision(2)<<findAverage(a,n);return 0;}\nint findSum(int a[],int n){int s=0;for(int i=0;i<n;i++)s+=a[i];return s;}\nint findMax(int a[],int n){int x=a[0];for(int i=1;i<n;i++)if(a[i]>x)x=a[i];return x;}\nint findMin(int a[],int n){int x=a[0];for(int i=1;i<n;i++)if(a[i]<x)x=a[i];return x;}\ndouble findAverage(int a[],int n){return (double)findSum(a,n)/n;}",
    "hints": [
      "Declare all function prototypes before main.",
      "Keep each calculation in its own function.",
      "Use floating-point division for average."
    ],
    "explanation": "Prototypes allow main to call separately defined functions with clear responsibilities.",
    "mode": "full"
  },
  {
    "id": "EX058",
    "topic": "Recursion",
    "subtopic": "Printing Sequence",
    "difficulty": "Easy",
    "title": "Print Numbers from 1 to N Using Recursion",
    "statement": "Print integers from 1 to N in ascending order using recursion. Stop after N; each recursive call must advance to the next integer.",
    "inputFormat": "One non-negative integer N.",
    "outputFormat": "Print 1 through N separated by spaces; for N=0 print an empty line.",
    "constraints": "0 <= N <= 1000.",
    "samples": [
      {
        "input": "5\n",
        "output": "1 2 3 4 5"
      },
      {
        "input": "1\n",
        "output": "1"
      }
    ],
    "tests": [
      {
        "input": "5\n",
        "expected": "1 2 3 4 5"
      },
      {
        "input": "1\n",
        "expected": "1"
      },
      {
        "input": "0\n",
        "expected": ""
      },
      {
        "input": "3\n",
        "expected": "1 2 3"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nvoid printNumbers(int x,int n){if(x>n)return;if(x>1)cout<<\" \";cout<<x;printNumbers(x+1,n);}\nint main(){int n;cin>>n;printNumbers(1,n);return 0;}",
    "hints": [
      "Start the function with current=1.",
      "The base case is current greater than N.",
      "Call recursively with current+1."
    ],
    "explanation": "Each call prints one number and advances until the base case stops the recursion.",
    "mode": "full"
  },
  {
    "id": "EX059",
    "topic": "Recursion",
    "subtopic": "Natural Number Sum",
    "difficulty": "Easy-Medium",
    "title": "Sum of First N Natural Numbers",
    "statement": "Calculate the sum from 1 to N using recursion. The base case returns zero for N=0; otherwise return N plus the sum for N-1.",
    "inputFormat": "One non-negative integer N.",
    "outputFormat": "Print the sum from 1 to N.",
    "constraints": "0 <= N <= 10000.",
    "samples": [
      {
        "input": "5\n",
        "output": "15"
      },
      {
        "input": "0\n",
        "output": "0"
      }
    ],
    "tests": [
      {
        "input": "5\n",
        "expected": "15"
      },
      {
        "input": "0\n",
        "expected": "0"
      },
      {
        "input": "1\n",
        "expected": "1"
      },
      {
        "input": "10\n",
        "expected": "55"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint sumNatural(int n){if(n==0)return 0;return n+sumNatural(n-1);}\nint main(){int n;cin>>n;cout<<sumNatural(n);return 0;}",
    "hints": [
      "Use N=0 as the base case.",
      "Add N to the recursive result for N-1.",
      "Every recursive call must move closer to zero."
    ],
    "explanation": "The current N is added while the recursive calls return.",
    "mode": "full"
  },
  {
    "id": "EX060",
    "topic": "Recursion",
    "subtopic": "Factorial",
    "difficulty": "Medium",
    "title": "Factorial Using Recursion",
    "statement": "Calculate N factorial recursively. Use 0! = 1 as a base case and N * factorial(N-1) as the recursive case.",
    "inputFormat": "One non-negative integer N.",
    "outputFormat": "Print N factorial.",
    "constraints": "0 <= N <= 12 so the result fits in a signed 32-bit integer.",
    "samples": [
      {
        "input": "5\n",
        "output": "120"
      },
      {
        "input": "0\n",
        "output": "1"
      }
    ],
    "tests": [
      {
        "input": "5\n",
        "expected": "120"
      },
      {
        "input": "0\n",
        "expected": "1"
      },
      {
        "input": "1\n",
        "expected": "1"
      },
      {
        "input": "7\n",
        "expected": "5040"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint factorial(int n){if(n<=1)return 1;return n*factorial(n-1);}\nint main(){int n;cin>>n;cout<<factorial(n);return 0;}",
    "hints": [
      "The base case returns 1 for 0 or 1.",
      "Multiply N by factorial(N-1).",
      "The argument decreases in every call."
    ],
    "explanation": "Factorial is defined recursively from the preceding integer.",
    "mode": "full"
  },
  {
    "id": "EX061",
    "topic": "Recursion",
    "subtopic": "Digit Count",
    "difficulty": "Medium",
    "title": "Count Digits Using Recursion",
    "statement": "Find the number of decimal digits in a non-negative integer using recursion. Treat zero as a one-digit number.",
    "inputFormat": "One non-negative integer N.",
    "outputFormat": "Print the number of digits in N.",
    "constraints": "0 <= N <= 1000000000.",
    "samples": [
      {
        "input": "5029\n",
        "output": "4"
      },
      {
        "input": "0\n",
        "output": "1"
      }
    ],
    "tests": [
      {
        "input": "5029\n",
        "expected": "4"
      },
      {
        "input": "0\n",
        "expected": "1"
      },
      {
        "input": "7\n",
        "expected": "1"
      },
      {
        "input": "1000000000\n",
        "expected": "10"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint countDigits(int n){if(n<10)return 1;return 1+countDigits(n/10);}\nint main(){int n;cin>>n;cout<<countDigits(n);return 0;}",
    "hints": [
      "A single-digit number, including zero, has one digit.",
      "Divide by 10 to remove the last digit.",
      "Add one for each recursive call."
    ],
    "explanation": "Each recursive division removes one decimal digit until one digit remains.",
    "mode": "full"
  },
  {
    "id": "EX062",
    "topic": "Recursion",
    "subtopic": "Digit Sum",
    "difficulty": "Medium-Hard",
    "title": "Sum of Digits Using Recursion",
    "statement": "Calculate the sum of all decimal digits of a non-negative integer using recursion. The base case for zero returns zero.",
    "inputFormat": "One non-negative integer N.",
    "outputFormat": "Print the sum of its digits.",
    "constraints": "0 <= N <= 1000000000.",
    "samples": [
      {
        "input": "352\n",
        "output": "10"
      },
      {
        "input": "0\n",
        "output": "0"
      }
    ],
    "tests": [
      {
        "input": "352\n",
        "expected": "10"
      },
      {
        "input": "0\n",
        "expected": "0"
      },
      {
        "input": "9\n",
        "expected": "9"
      },
      {
        "input": "10005\n",
        "expected": "6"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint sumDigits(int n){if(n==0)return 0;return n%10+sumDigits(n/10);}\nint main(){int n;cin>>n;cout<<sumDigits(n);return 0;}",
    "hints": [
      "Use n%10 to get the last digit.",
      "Use n/10 to remove the last digit.",
      "Return zero when no digits remain."
    ],
    "explanation": "The recursive call sums the remaining prefix and n%10 contributes the last digit.",
    "mode": "full"
  },
  {
    "id": "EX063",
    "topic": "Recursion",
    "subtopic": "Reverse Number",
    "difficulty": "Hard",
    "title": "Reverse a Number Using Recursion",
    "statement": "Reverse a non-negative integer using a recursive helper function. Do not convert the number to a string; handle zero correctly.",
    "inputFormat": "One non-negative integer N.",
    "outputFormat": "Print the reversed integer without leading zeroes.",
    "constraints": "0 <= N <= 999999999.",
    "samples": [
      {
        "input": "1234\n",
        "output": "4321"
      },
      {
        "input": "0\n",
        "output": "0"
      }
    ],
    "tests": [
      {
        "input": "1234\n",
        "expected": "4321"
      },
      {
        "input": "0\n",
        "expected": "0"
      },
      {
        "input": "1200\n",
        "expected": "21"
      },
      {
        "input": "90807\n",
        "expected": "70809"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint reverseNumber(int n,int rev){if(n==0)return rev;return reverseNumber(n/10,rev*10+n%10);}\nint main(){int n;cin>>n;cout<<reverseNumber(n,0);return 0;}",
    "hints": [
      "Carry the reversed value as a second parameter.",
      "Append the last digit with rev*10+n%10.",
      "When n becomes zero, return the accumulator."
    ],
    "explanation": "The helper carries the partially reversed number while removing one source digit per call.",
    "mode": "full"
  },
  {
    "id": "EX064",
    "topic": "Recursion",
    "subtopic": "Fibonacci Series",
    "difficulty": "Hard / Examination Level",
    "title": "Fibonacci Series Using Recursion",
    "statement": "Generate the first N Fibonacci numbers using recursion with F(0)=0, F(1)=1, and F(n)=F(n-1)+F(n-2).",
    "inputFormat": "One integer N, the number of terms.",
    "outputFormat": "Print the first N terms separated by spaces; for N=0 print an empty line.",
    "constraints": "0 <= N <= 16.",
    "samples": [
      {
        "input": "7\n",
        "output": "0 1 1 2 3 5 8"
      },
      {
        "input": "1\n",
        "output": "0"
      }
    ],
    "tests": [
      {
        "input": "7\n",
        "expected": "0 1 1 2 3 5 8"
      },
      {
        "input": "1\n",
        "expected": "0"
      },
      {
        "input": "0\n",
        "expected": ""
      },
      {
        "input": "5\n",
        "expected": "0 1 1 2 3"
      }
    ],
    "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your solution here\n    return 0;\n}",
    "solution": "#include <iostream>\nusing namespace std;\nint fibonacci(int n){if(n==0)return 0;if(n==1)return 1;return fibonacci(n-1)+fibonacci(n-2);}\nint main(){int n;cin>>n;for(int i=0;i<n;i++){if(i)cout<<\" \";cout<<fibonacci(i);}return 0;}",
    "hints": [
      "The base cases are F(0)=0 and F(1)=1.",
      "For n>1, add the two preceding Fibonacci values.",
      "Generate term indices from zero through N-1."
    ],
    "explanation": "The recursive rule combines the previous two terms and uses the first two terms as base cases.",
    "mode": "full"
  }
];
