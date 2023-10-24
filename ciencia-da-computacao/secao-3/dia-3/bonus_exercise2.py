from doubly_linked_list import DoublyLinkedList
from doubly_node import DoublyNode

def delete_duplicates(doubly_linked_list):
    # create new dummy node and point to head
    new_node = DoublyNode(doubly_linked_list.head.value)

    # declare prev and point on dummy
    prev = new_node

    # declare cur and point on dummy.next
    cur = doubly_linked_list.head.next

    new_list = DoublyLinkedList() 

    # iterate untill head reaches end of linked list
    while cur:
        # if we find duplicate:
        if cur.next and cur.next.value == cur.value:
            # we iterate until we have duplicates:
            while cur.next and cur.next.value == cur.value:
                # move cur to next duplicate
                cur = cur.next
            # remove all duplicates by pointing prev.next to head.next
            prev.next = cur.next
            
        # if not duplicate:    
        else:
            # move prev pointer
            prev = prev.next
            new_list._length += 1
            
        # move head pointer
        cur = cur.next

    # removing the tail from the counter
    new_list._length -= 1

    # adding the node to the new list
    new_list.head.next = new_node.next
    return new_list

doubly_linked_list = DoublyLinkedList()
doubly_linked_list.insert_first(1)
doubly_linked_list.insert_last(3)
doubly_linked_list.insert_at(2, 1)
doubly_linked_list.insert_first(1)
doubly_linked_list.insert_last(3)
doubly_linked_list.insert_last(3)
doubly_linked_list.insert_last(4)
# doubly_linked_list.insert_last(4)
doubly_linked_list.insert_last(5)
print(doubly_linked_list)
print(delete_duplicates(doubly_linked_list))