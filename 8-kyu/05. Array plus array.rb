=begin
I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
=end



def array_plus_array(arr1, arr2)
  arr1 + arr2 # something went wrong
end



# my solution

def array_plus_array(arr1, arr2)
  return (arr1 + arr2).reduce{|acc, curr| acc + curr }
end




# other solutions!!
def array_plus_array(arr1, arr2)
  (arr1 + arr2).sum
end


def array_plus_array(arr1, arr2)
  (arr1 + arr2).reduce(:+)
end