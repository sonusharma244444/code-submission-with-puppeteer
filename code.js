module.exports = {
  answer: [
    `#include <bits/stdc++.h>
    using namespace std;

    int main(){
        int number_of_elements;
        cin >>number_of_elements;
        vector <int> array(number_of_elements);
        int sum_of_array = 0;

        for(int i=0;i<number_of_elements; i++){
            cin >> array[i];
            sum_of_array +=array[i];

        }
        cout <<sum_of_array;
        return 0;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    `,

    `import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class CompareTheTriplets {

	static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
		int aliceTotalScore = 0, bobTotalScore = 0;

		for (int i = 0; i < 3; i++) {
			int aliceScore = a.get(i);
			int bobScore = b.get(i);
			if (aliceScore != bobScore) {
				int temp = aliceScore > bobScore ? aliceTotalScore++ : bobTotalScore++;
			}

		}
		List<Integer> result = new ArrayList<>();
		result.add(aliceTotalScore);
		result.add(bobTotalScore);
		return result;
	}

}`,

    `import java.util.Scanner;


public class AVeryBigSum {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int n = in.nextInt();
		long sum = 0;

		for (int arr_i = 0; arr_i < n; arr_i++) {
			sum += in.nextLong();
		}
		System.out.println(sum);
		in.close();

	}
}`,
    `public class DiagonalDifference {
	
	static int diagonalDifference(int[][] arr) {
		int leftSum = 0, rightSum = 0;
		int n = arr.length;
		for (int i = 0; i < n; i++) {
			leftSum += arr[i][i];
			rightSum += arr[i][n - 1 - i];
		}
		return (Math.abs(leftSum - rightSum));
	}
}`,
    `import java.util.Scanner;


public class PlusMinus {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int n = in.nextInt();
		int arr[] = new int[n];
		float countPositive = 0;
		float countNegetive = 0;
		float countZero = 0;
		for (int arr_i = 0; arr_i < n; arr_i++) {
			arr[arr_i] = in.nextInt();
			if (arr[arr_i] < 0) {
				countNegetive++;
			}
			if (arr[arr_i] > 0) {
				countPositive++;
			}
			if (arr[arr_i] == 0) {
				countZero++;
			}
		}
		System.out.printf("%1.6f \n", countPositive / n);
		System.out.printf("%1.6f \n", countNegetive / n);
		System.out.printf("%1.6f \n", countZero / n);
		in.close();
	}
}`,
  ],
};
